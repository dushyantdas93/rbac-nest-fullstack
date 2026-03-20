import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PermissionModule } from './permission/permission.module';
import { RoleModule } from './role/role.module';
import { RbacModule } from './rbac/rbac.module';
import { ModuleModule } from './module/module.module';
import { UserPermissionModule } from './user-permission/user-permission.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dushyantmanikpuri072:Manikpuri072@cluster0.mh5mg.mongodb.net/nest-rbac',
    ),
    AuthModule,
    PermissionModule,
    RoleModule,
    RbacModule,
    ModuleModule,
    UserPermissionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
