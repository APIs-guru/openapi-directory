import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FlagPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=post_id" })
  postId: string;
}


export class FlagPostRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=reason" })
  reason: string;
}


export class FlagPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FlagPostPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: FlagPostRequestBody;
}


export class FlagPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
