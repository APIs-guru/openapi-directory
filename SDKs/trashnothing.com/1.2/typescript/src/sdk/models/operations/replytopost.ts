import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReplyToPostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=post_id" })
  postId: string;
}


export class ReplyToPostRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=message" })
  message: string;

  @Metadata({ data: "multipart_form, name=photo_ids" })
  photoIds?: string;
}


export class ReplyToPostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReplyToPostPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: ReplyToPostRequestBody;
}


export class ReplyToPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
