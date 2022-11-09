import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESIPCREDENTIAL_SERVERS = [
	"https://api.twilio.com",
];



export class UpdateSipCredentialPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=CredentialListSid" })
  credentialListSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateSipCredentialUpdateSipCredentialRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Password;" })
  password?: string;
}


export class UpdateSipCredentialSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSipCredentialRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSipCredentialPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSipCredentialUpdateSipCredentialRequest;

  @Metadata()
  security: UpdateSipCredentialSecurity;
}


export class UpdateSipCredentialResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountSipSipCredentialListSipCredential?: shared.ApiV2010AccountSipSipCredentialListSipCredential;
}
