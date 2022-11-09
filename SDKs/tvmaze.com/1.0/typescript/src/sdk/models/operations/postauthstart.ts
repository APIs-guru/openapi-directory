import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAuthStartRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=email_confirmation" })
  emailConfirmation?: boolean;
}


export class PostAuthStartRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostAuthStartRequestBody;
}


export class PostAuthStart200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=confirm_url" })
  confirmUrl?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;
}


export class PostAuthStartResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAuthStart200ApplicationJsonObject?: PostAuthStart200ApplicationJson;

  @Metadata()
  statusCode: number;
}
