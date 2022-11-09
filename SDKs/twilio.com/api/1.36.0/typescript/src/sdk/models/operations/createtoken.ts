import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATETOKEN_SERVERS = [
	"https://api.twilio.com",
];



export class CreateTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class CreateTokenCreateTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Ttl;" })
  ttl?: number;
}


export class CreateTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateTokenRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateTokenPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateTokenCreateTokenRequest;

  @Metadata()
  security: CreateTokenSecurity;
}


export class CreateTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountToken?: shared.ApiV2010AccountToken;
}
