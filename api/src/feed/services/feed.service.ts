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
  // deletePost(id: string): Observable<DeleteResult> {
  //     const post = this.feedpostrepository.delete(id);
  //     // .pipe(
  //         //     tap((deletedPost) => console.log(`Deleted Post with id=${
  //             // deletedPost.id}`)),
  //             //     catchError( (error) => `Failed to delete Post with id=${id}:
  //             // ${handleError(error)}` ),
  //             // );
  //             return from(post);
  //             }
  //             getPost(id: string):Observable<FeedPost | undefined>{
  //                 return from(this.feedpostrepository.findOne({where:{id}}))
  //                 }
  //                 // /**
  //                 //  * Handle Http operation that failed.
  //                 //  * Let the app continue.
  //                 //  * @param error - response body or error object.
  //                 //  */
  //                 // private handleError(error: any) {
  //                     //   let errMessage: string;
  //                     // if (error instanceof Response) {
  //                         // const body = error || '';
  //                         // const applicationError = body.json() || {};
  //                         // const serverError = body.statusText ||
  //                         //  `${body.status}`;
  //                         // return `${applicationError.message || ''} Server Error: ${serverError}`
  //                         // } else {
  //                             // return `${error.message ? error.message : error.toString()}`;
}
