import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ConvertAccessTokenRequestBodyGrantTypeEnum {
    VimeoOauth1 = "vimeo_oauth1"
}


export class ConvertAccessTokenRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=grant_type" })
  grantType: ConvertAccessTokenRequestBodyGrantTypeEnum;

  @Metadata({ data: "json, name=token" })
  token: string;

  @Metadata({ data: "json, name=token_secret" })
  tokenSecret: string;
}


export class ConvertAccessTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/vnd.vimeo.auth+json" })
  request: ConvertAccessTokenRequestBody;
}


export class ConvertAccessTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  auth?: shared.Auth;

  @Metadata()
  authError?: shared.AuthError;
}
