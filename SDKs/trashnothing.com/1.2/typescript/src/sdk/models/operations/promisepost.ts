import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PromisePostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=post_id" })
  postId: string;
}


export class PromisePostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PromisePostPathParams;
}


export class PromisePostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  post?: shared.Post;

  @Metadata()
  statusCode: number;
}
