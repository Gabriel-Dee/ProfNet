import { Module } from '@nestjs/common';
import { FeedService } from './controllers/feed.service';
import { FeedController } from './controllers/feed.controller';

@Module({
  providers: [FeedService],
  controllers: [FeedController]
})
export class FeedModule {}
