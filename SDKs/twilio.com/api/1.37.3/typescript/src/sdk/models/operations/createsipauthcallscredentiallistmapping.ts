import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSipAuthCallsCredentialListMappingServerList = [
	"https://api.twilio.com",
] as const;


export class CreateSipAuthCallsCredentialListMappingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" })
  domainSid: string;
}


export class CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CredentialListSid;" })
  credentialListSid: string;
}


export class CreateSipAuthCallsCredentialListMappingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSipAuthCallsCredentialListMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSipAuthCallsCredentialListMappingPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest;

  @SpeakeasyMetadata()
  security: CreateSipAuthCallsCredentialListMappingSecurity;
}


export class CreateSipAuthCallsCredentialListMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping;
}
