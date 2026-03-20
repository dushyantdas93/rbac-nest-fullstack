import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Role, RoleDocument } from './schemas/role.schema';
import { Model } from 'mongoose';

@Injectable()
export class RoleService {

   constructor(
        @InjectModel(Role.name)
        private roleModel: Model<RoleDocument>,
      ) {}

 async create(dto: CreateRoleDto) {
  return this.roleModel.create(dto);
}



  findAll() {
    return this.roleModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {
return this.roleModel.findByIdAndUpdate(id,updateRoleDto);



     
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }


}
