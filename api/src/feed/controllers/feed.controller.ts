import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedPost } from '../models/post.interface';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}

  // post request
  @Post()
  create(@Body() feedpost: FeedPost): Observable<FeedPost> {
    return this.feedService.createPost(feedpost);
  }
  // Get request
  @Get()
  findAll(): Observable<FeedPost[]> {
    return this.feedService.findAllPosts();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body()
    feedpost: FeedPost,
  ): Observable<UpdateResult> {
    return this.feedService.updatePost(id, feedpost);
  }
}
