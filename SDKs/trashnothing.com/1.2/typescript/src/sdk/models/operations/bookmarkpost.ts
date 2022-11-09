import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BookmarkPostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=post_id" })
  postId: string;
}


export class BookmarkPostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BookmarkPostPathParams;
}


export class BookmarkPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
