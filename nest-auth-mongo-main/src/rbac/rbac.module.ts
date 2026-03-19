import { Module } from '@nestjs/common';
import { RbacGateway } from './rbac.gateway';

@Module({
  providers: [RbacGateway],
  exports: [RbacGateway], // 🔥 IMPORTANT (so other modules can use it)
})
export class RbacModule {}
