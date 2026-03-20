import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { RbacModule } from 'src/rbac/rbac.module';
import { PermissionModule } from 'src/permission/permission.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
    ]),
     JwtModule.register({
      secret: 'SUPER_SECRET_KEY',
      signOptions: { expiresIn: '1h' },
     }),
     RbacModule,
      PermissionModule, // 🔥 yaha import karo
     
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}