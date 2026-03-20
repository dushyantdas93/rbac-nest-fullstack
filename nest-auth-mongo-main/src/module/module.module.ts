import { Module } from '@nestjs/common';
import { ModuleService } from './module.service';
import { ModuleController } from './module.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ModuleEntity, ModuleSchema } from './entities/module.entity';

@Module({
   imports: [
    MongooseModule.forFeature([
      { name: ModuleEntity.name, schema: ModuleSchema }
    ])
  ],
  controllers: [ModuleController],
  providers: [ModuleService],
})
export class ModuleModule {}
