import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ConvertAccessTokenRequestBodyGrantTypeEnum {
    VimeoOauth1 = "vimeo_oauth1"
}


export class ConvertAccessTokenRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=grant_type" })
  grantType: ConvertAccessTokenRequestBodyGrantTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;

  @SpeakeasyMetadata({ data: "json, name=token_secret" })
  tokenSecret: string;
}


export class ConvertAccessTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.auth+json" })
  request: ConvertAccessTokenRequestBody;
}


export class ConvertAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  auth?: shared.Auth;

  @SpeakeasyMetadata()
  authError?: shared.AuthError;
}
