import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESIPAUTHCALLSIPACCESSCONTROLLISTMAPPING_SERVERS = [
	"https://api.twilio.com",
];



export class CreateSipAuthCallsIpAccessControlListMappingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" })
  domainSid: string;
}


export class CreateSipAuthCallsIpAccessControlListMappingCreateSipAuthCallsIpAccessControlListMappingRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=IpAccessControlListSid;" })
  ipAccessControlListSid: string;
}


export class CreateSipAuthCallsIpAccessControlListMappingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSipAuthCallsIpAccessControlListMappingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateSipAuthCallsIpAccessControlListMappingPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSipAuthCallsIpAccessControlListMappingCreateSipAuthCallsIpAccessControlListMappingRequest;

  @Metadata()
  security: CreateSipAuthCallsIpAccessControlListMappingSecurity;
}


export class CreateSipAuthCallsIpAccessControlListMappingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping;
}
