import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESIPCREDENTIAL_SERVERS = [
	"https://api.twilio.com",
];



export class CreateSipCredentialPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=CredentialListSid" })
  credentialListSid: string;
}


export class CreateSipCredentialCreateSipCredentialRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Password;" })
  password: string;

  @Metadata({ data: "form, name=Username;" })
  username: string;
}


export class CreateSipCredentialSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSipCredentialRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateSipCredentialPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSipCredentialCreateSipCredentialRequest;

  @Metadata()
  security: CreateSipCredentialSecurity;
}


export class CreateSipCredentialResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountSipSipCredentialListSipCredential?: shared.ApiV2010AccountSipSipCredentialListSipCredential;
}
