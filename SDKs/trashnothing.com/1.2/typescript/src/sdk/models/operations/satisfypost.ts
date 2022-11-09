import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SatisfyPostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=post_id" })
  postId: string;
}


export class SatisfyPostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SatisfyPostPathParams;
}


export class SatisfyPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  post?: shared.Post;

  @Metadata()
  statusCode: number;
}
