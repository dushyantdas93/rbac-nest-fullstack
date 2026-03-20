import { Injectable } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ModuleDocument, ModuleEntity } from './entities/module.entity';



@Injectable()
export class ModuleService {
   constructor(
      @InjectModel(ModuleEntity.name)
     private moduleModel: Model<ModuleDocument>,
   ) { }

  create(createModuleDto: CreateModuleDto) {
    return this.moduleModel.create(createModuleDto);

  }

  findAll() {
    return `This action returns all module`;
  }

  findOne(id: number) {
    return `This action returns a #${id} module`;
  }

  update(id: number, updateModuleDto: UpdateModuleDto) {
    return `This action updates a #${id} module`;
  }

  remove(id: number) {
    return `This action removes a #${id} module`;
  }
}
