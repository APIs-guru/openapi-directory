import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSipAuthRegistrationsCredentialListMappingServerList = [
	"https://api.twilio.com",
] as const;


export class CreateSipAuthRegistrationsCredentialListMappingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" })
  domainSid: string;
}


export class CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CredentialListSid;" })
  credentialListSid: string;
}


export class CreateSipAuthRegistrationsCredentialListMappingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSipAuthRegistrationsCredentialListMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSipAuthRegistrationsCredentialListMappingPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest;

  @SpeakeasyMetadata()
  security: CreateSipAuthRegistrationsCredentialListMappingSecurity;
}


export class CreateSipAuthRegistrationsCredentialListMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping;
}
