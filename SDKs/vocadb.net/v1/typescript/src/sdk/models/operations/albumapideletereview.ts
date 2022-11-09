import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AlbumApiDeleteReviewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=reviewId" })
  reviewId: number;
}


export class AlbumApiDeleteReviewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AlbumApiDeleteReviewPathParams;
}


export class AlbumApiDeleteReviewResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
