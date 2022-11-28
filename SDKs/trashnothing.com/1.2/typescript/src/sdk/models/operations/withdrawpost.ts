import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WithdrawPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=post_id" })
  postId: string;
}


export class WithdrawPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WithdrawPostPathParams;
}


export class WithdrawPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  post?: shared.Post;

  @SpeakeasyMetadata()
  statusCode: number;
}
