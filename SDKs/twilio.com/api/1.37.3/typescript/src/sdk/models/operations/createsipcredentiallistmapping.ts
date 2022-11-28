import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSipCredentialListMappingServerList = [
	"https://api.twilio.com",
] as const;


export class CreateSipCredentialListMappingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" })
  domainSid: string;
}


export class CreateSipCredentialListMappingCreateSipCredentialListMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CredentialListSid;" })
  credentialListSid: string;
}


export class CreateSipCredentialListMappingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSipCredentialListMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSipCredentialListMappingPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSipCredentialListMappingCreateSipCredentialListMappingRequest;

  @SpeakeasyMetadata()
  security: CreateSipCredentialListMappingSecurity;
}


export class CreateSipCredentialListMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountSipSipDomainSipCredentialListMapping?: shared.ApiV2010AccountSipSipDomainSipCredentialListMapping;
}
