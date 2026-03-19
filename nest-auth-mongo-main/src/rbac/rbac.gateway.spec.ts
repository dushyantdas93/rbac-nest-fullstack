import { Test, TestingModule } from '@nestjs/testing';
import { RbacGateway } from './rbac.gateway';

describe('RbacGateway', () => {
  let gateway: RbacGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RbacGateway],
    }).compile();

    gateway = module.get<RbacGateway>(RbacGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
