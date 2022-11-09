import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class WithdrawPostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=post_id" })
  postId: string;
}


export class WithdrawPostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: WithdrawPostPathParams;
}


export class WithdrawPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  post?: shared.Post;

  @Metadata()
  statusCode: number;
}
