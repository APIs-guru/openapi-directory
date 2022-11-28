import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ExchangeAuthCodeRequestBodyGrantTypeEnum {
    AuthorizationCode = "authorization_code"
}


export class ExchangeAuthCodeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=grant_type" })
  grantType: ExchangeAuthCodeRequestBodyGrantTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=redirect_uri" })
  redirectUri: string;
}


export class ExchangeAuthCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.auth+json" })
  request: ExchangeAuthCodeRequestBody;
}


export class ExchangeAuthCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  auth?: shared.Auth;

  @SpeakeasyMetadata()
  authError?: shared.AuthError;
}
