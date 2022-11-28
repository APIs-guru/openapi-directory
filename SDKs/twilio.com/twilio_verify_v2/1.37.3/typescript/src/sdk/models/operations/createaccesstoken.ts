import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateAccessTokenServerList = [
	"https://verify.twilio.com",
] as const;


export class CreateAccessTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateAccessTokenCreateAccessTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=FactorFriendlyName;" })
  factorFriendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=FactorType;" })
  factorType: shared.AccessTokenEnumFactorTypesEnum;

  @SpeakeasyMetadata({ data: "form, name=Identity;" })
  identity: string;

  @SpeakeasyMetadata({ data: "form, name=Ttl;" })
  ttl?: number;
}


export class CreateAccessTokenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateAccessTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateAccessTokenPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateAccessTokenCreateAccessTokenRequest;

  @SpeakeasyMetadata()
  security: CreateAccessTokenSecurity;
}


export class CreateAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifyV2ServiceAccessToken?: shared.VerifyV2ServiceAccessToken;
}
