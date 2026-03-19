import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PermissionModule } from './permission/permission.module';
import { RoleModule } from './role/role.module';
import { RbacModule } from './rbac/rbac.module';


@Module({
  imports: [
     MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest-auth'),
    AuthModule,
    PermissionModule,
    RoleModule,
    RbacModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
