import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESIPAUTHCALLSCREDENTIALLISTMAPPING_SERVERS = [
	"https://api.twilio.com",
];



export class CreateSipAuthCallsCredentialListMappingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" })
  domainSid: string;
}


export class CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CredentialListSid;" })
  credentialListSid: string;
}


export class CreateSipAuthCallsCredentialListMappingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSipAuthCallsCredentialListMappingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateSipAuthCallsCredentialListMappingPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest;

  @Metadata()
  security: CreateSipAuthCallsCredentialListMappingSecurity;
}


export class CreateSipAuthCallsCredentialListMappingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping;
}
