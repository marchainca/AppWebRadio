import { Test, TestingModule } from '@nestjs/testing';
import { HttpCustomServiceService } from './http-custom-service.service';

describe('HttpCustomServiceService', () => {
  let service: HttpCustomServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpCustomServiceService],
    }).compile();

    service = module.get<HttpCustomServiceService>(HttpCustomServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
