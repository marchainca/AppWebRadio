import { Test, TestingModule } from '@nestjs/testing';
import { SocialMediaPostsService } from './social-media-posts.service';

describe('SocialMediaPostsService', () => {
  let service: SocialMediaPostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocialMediaPostsService],
    }).compile();

    service = module.get<SocialMediaPostsService>(SocialMediaPostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
