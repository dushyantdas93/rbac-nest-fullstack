
import { IsMongoId, IsBoolean, IsOptional } from 'class-validator';

export class CreatePermissionDto {
  @IsMongoId()
  role: string;

  @IsMongoId()
  module: string;

  @IsOptional()
  @IsBoolean()
  create?: boolean;

  @IsOptional()
  @IsBoolean()
  read?: boolean;

  @IsOptional()
  @IsBoolean()
  update?: boolean;

  @IsOptional()
  @IsBoolean()
  delete?: boolean;
}