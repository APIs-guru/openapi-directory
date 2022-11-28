import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSipAuthCallsIpAccessControlListMappingServerList = [
	"https://api.twilio.com",
] as const;


export class CreateSipAuthCallsIpAccessControlListMappingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" })
  domainSid: string;
}


export class CreateSipAuthCallsIpAccessControlListMappingCreateSipAuthCallsIpAccessControlListMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=IpAccessControlListSid;" })
  ipAccessControlListSid: string;
}


export class CreateSipAuthCallsIpAccessControlListMappingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSipAuthCallsIpAccessControlListMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSipAuthCallsIpAccessControlListMappingPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSipAuthCallsIpAccessControlListMappingCreateSipAuthCallsIpAccessControlListMappingRequest;

  @SpeakeasyMetadata()
  security: CreateSipAuthCallsIpAccessControlListMappingSecurity;
}


export class CreateSipAuthCallsIpAccessControlListMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping;
}
