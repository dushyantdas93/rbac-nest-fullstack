import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { assignRoleDto } from './dto/assingRole.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { PermissionService } from 'src/permission/permission.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
    private jwtService: JwtService,
    private readonly permissionService: PermissionService, // 🔥 inject
  ) {}

  async validateUser(dto: LoginDto) {
    const user = await this.userModel.findOne({ email: dto.email });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isMatch = await bcrypt.compare(dto.password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    return user;
  }

  async login(dto: LoginDto) {
    const user = await this.validateUser(dto);
    const permission = await this.permissionService.getPermissionsByRole(
      user?.roles?.[0].toString(),
    );

    const payload = { sub: user._id, email: user.email };

    return {
      access_token: this.jwtService.sign(payload),
      expires_in: '1h',
      user: {
        ...user.toObject(), // mongoose document ko plain object banao
        permissions: permission,
      },
    };
  }

  async create(dto: CreateAuthDto): Promise<User> {
    const exists = await this.userModel.findOne({ email: dto.email });

    if (exists) {
      throw new ConflictException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = new this.userModel({
      ...dto,
      password: hashedPassword,
    });

    return user.save();
  }

  async assignRole(dto: assignRoleDto) {
    return this.userModel.findByIdAndUpdate(
      dto.userId,
      { $addToSet: { roles: dto.roleId } },
      { new: true },
    );
  }

  async getUserWithPermissions(dto: { id: string }) {
    const user = await this.userModel.findById(dto.id).populate({
      path: 'roles',
      populate: {
        path: 'permissions',
      },
    });

    return user;
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
