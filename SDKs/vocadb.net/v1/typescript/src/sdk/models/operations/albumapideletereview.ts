import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AlbumApiDeleteReviewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reviewId" })
  reviewId: number;
}


export class AlbumApiDeleteReviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AlbumApiDeleteReviewPathParams;
}


export class AlbumApiDeleteReviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
