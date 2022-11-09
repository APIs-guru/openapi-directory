import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UnpromisePostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=post_id" })
  postId: string;
}


export class UnpromisePostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnpromisePostPathParams;
}


export class UnpromisePostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  post?: shared.Post;

  @Metadata()
  statusCode: number;
}
