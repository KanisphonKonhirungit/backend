import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PostsService } from '../src/posts/posts.service';
import { Post } from '../src/posts/post.entity';

describe('PostsService', () => {
  let service: PostsService;
  let repo: Repository<Post>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostsService,
        {
          provide: getRepositoryToken(Post),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<PostsService>(PostsService);
    repo = module.get<Repository<Post>>(getRepositoryToken(Post));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a post', () => {
    const post = {
      title: 'Test Post',
      content: 'This is a test',
      userId: 1,
      id: 1,
    };
    jest.spyOn(repo, 'save').mockResolvedValue(post as Post);

    expect(service.create(post)).toEqual(post);
  });
});
