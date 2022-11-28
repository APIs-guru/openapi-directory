import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAuthStartRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=email_confirmation" })
  emailConfirmation?: boolean;
}


export class PostAuthStart200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confirm_url" })
  confirmUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}


export class PostAuthStartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAuthStartRequestBody;
}


export class PostAuthStartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAuthStart200ApplicationJsonObject?: PostAuthStart200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
