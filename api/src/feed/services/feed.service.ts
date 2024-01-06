import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedPostEntity } from '../models/post.entity';
import { Repository, UpdateResult } from 'typeorm';
import { FeedPost } from '../models/post.interface';
import { Observable, from } from 'rxjs';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedPostEntity)
    private readonly feedpostrepository: Repository<FeedPostEntity>,
  ) {}

  createPost(feedpost: FeedPost): Observable<FeedPost> {
    return from(this.feedpostrepository.save(feedpost));
  }

  findAllPosts(): Observable<FeedPost[]> {
    return from(this.feedpostrepository.find());
  }

  updatePost(id: number, feedpost: FeedPost): Observable<UpdateResult> {
    return from(this.feedpostrepository.update(id, feedpost));
  }
}
