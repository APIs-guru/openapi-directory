import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateSipCredentialServerList = [
	"https://api.twilio.com",
] as const;


export class UpdateSipCredentialPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CredentialListSid" })
  credentialListSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateSipCredentialUpdateSipCredentialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Password;" })
  password?: string;
}


export class UpdateSipCredentialSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSipCredentialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateSipCredentialPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSipCredentialUpdateSipCredentialRequest;

  @SpeakeasyMetadata()
  security: UpdateSipCredentialSecurity;
}


export class UpdateSipCredentialResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountSipSipCredentialListSipCredential?: shared.ApiV2010AccountSipSipCredentialListSipCredential;
}
