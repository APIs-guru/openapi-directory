import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PromisePostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=post_id" })
  postId: string;
}


export class PromisePostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PromisePostPathParams;
}


export class PromisePostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  post?: shared.Post;

  @SpeakeasyMetadata()
  statusCode: number;
}
