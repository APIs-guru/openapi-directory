import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ExchangeAuthCodeRequestBodyGrantTypeEnum {
    AuthorizationCode = "authorization_code"
}


export class ExchangeAuthCodeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=grant_type" })
  grantType: ExchangeAuthCodeRequestBodyGrantTypeEnum;

  @Metadata({ data: "json, name=redirect_uri" })
  redirectUri: string;
}


export class ExchangeAuthCodeRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/vnd.vimeo.auth+json" })
  request: ExchangeAuthCodeRequestBody;
}


export class ExchangeAuthCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  auth?: shared.Auth;

  @Metadata()
  authError?: shared.AuthError;
}
