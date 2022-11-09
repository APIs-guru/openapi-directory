import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEACCESSTOKEN_SERVERS = [
	"https://verify.twilio.com",
];



export class CreateAccessTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateAccessTokenCreateAccessTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=FactorFriendlyName;" })
  factorFriendlyName?: string;

  @Metadata({ data: "form, name=FactorType;" })
  factorType: shared.AccessTokenEnumFactorTypesEnum;

  @Metadata({ data: "form, name=Identity;" })
  identity: string;

  @Metadata({ data: "form, name=Ttl;" })
  ttl?: number;
}


export class CreateAccessTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateAccessTokenRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateAccessTokenPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateAccessTokenCreateAccessTokenRequest;

  @Metadata()
  security: CreateAccessTokenSecurity;
}


export class CreateAccessTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyV2ServiceAccessToken?: shared.VerifyV2ServiceAccessToken;
}
