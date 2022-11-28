import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SharePostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=post_id" })
  postId: string;
}


export class SharePostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SharePostPathParams;
}


export class SharePostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
