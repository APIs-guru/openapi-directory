import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateTokenServerList = [
	"https://oauth.twilio.com",
] as const;


export class CreateTokenCreateTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ClientSecret;" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "form, name=ClientSid;" })
  clientSid: string;

  @SpeakeasyMetadata({ data: "form, name=Code;" })
  code?: string;

  @SpeakeasyMetadata({ data: "form, name=CodeVerifier;" })
  codeVerifier?: string;

  @SpeakeasyMetadata({ data: "form, name=DeviceCode;" })
  deviceCode?: string;

  @SpeakeasyMetadata({ data: "form, name=DeviceId;" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "form, name=GrantType;" })
  grantType: string;

  @SpeakeasyMetadata({ data: "form, name=RefreshToken;" })
  refreshToken?: string;
}


export class CreateTokenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateTokenCreateTokenRequest;

  @SpeakeasyMetadata()
  security: CreateTokenSecurity;
}


export class CreateTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  oauthV1Token?: shared.OauthV1Token;
}
