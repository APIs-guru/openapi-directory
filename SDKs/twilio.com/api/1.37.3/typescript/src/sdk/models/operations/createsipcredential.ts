import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSipCredentialServerList = [
	"https://api.twilio.com",
] as const;


export class CreateSipCredentialPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CredentialListSid" })
  credentialListSid: string;
}


export class CreateSipCredentialCreateSipCredentialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Password;" })
  password: string;

  @SpeakeasyMetadata({ data: "form, name=Username;" })
  username: string;
}


export class CreateSipCredentialSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSipCredentialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSipCredentialPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSipCredentialCreateSipCredentialRequest;

  @SpeakeasyMetadata()
  security: CreateSipCredentialSecurity;
}


export class CreateSipCredentialResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountSipSipCredentialListSipCredential?: shared.ApiV2010AccountSipSipCredentialListSipCredential;
}
