import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReplyToPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=post_id" })
  postId: string;
}


export class ReplyToPostRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=photo_ids" })
  photoIds?: string;
}


export class ReplyToPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReplyToPostPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: ReplyToPostRequestBody;
}


export class ReplyToPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
