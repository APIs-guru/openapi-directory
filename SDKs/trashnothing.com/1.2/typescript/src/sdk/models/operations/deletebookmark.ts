import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteBookmarkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=post_id" })
  postId: string;
}


export class DeleteBookmarkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteBookmarkPathParams;
}


export class DeleteBookmarkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
