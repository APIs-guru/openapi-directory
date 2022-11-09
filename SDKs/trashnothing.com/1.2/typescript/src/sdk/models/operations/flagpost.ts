import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FlagPostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=post_id" })
  postId: string;
}


export class FlagPostRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=details" })
  details?: string;

  @Metadata({ data: "multipart_form, name=reason" })
  reason: string;
}


export class FlagPostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FlagPostPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: FlagPostRequestBody;
}


export class FlagPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
