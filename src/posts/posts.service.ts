import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  private posts: Post[] = [];

  findAll() {
    return this.posts;
  }

  create(post: Post) {
    this.posts.push(post);
    return post;
  }

  findOne(id: number) {
    return this.posts.find((post) => post.id === id);
  }
}
