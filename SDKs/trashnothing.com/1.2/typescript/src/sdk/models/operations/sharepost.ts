import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SharePostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=post_id" })
  postId: string;
}


export class SharePostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SharePostPathParams;
}


export class SharePostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
