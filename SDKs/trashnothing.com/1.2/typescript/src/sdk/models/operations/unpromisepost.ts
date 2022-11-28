import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UnpromisePostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=post_id" })
  postId: string;
}


export class UnpromisePostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnpromisePostPathParams;
}


export class UnpromisePostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  post?: shared.Post;

  @SpeakeasyMetadata()
  statusCode: number;
}
