import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BookmarkPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=post_id" })
  postId: string;
}


export class BookmarkPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BookmarkPostPathParams;
}


export class BookmarkPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
