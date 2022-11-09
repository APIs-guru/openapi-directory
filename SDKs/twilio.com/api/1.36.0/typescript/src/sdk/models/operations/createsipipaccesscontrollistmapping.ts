import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESIPIPACCESSCONTROLLISTMAPPING_SERVERS = [
	"https://api.twilio.com",
];



export class CreateSipIpAccessControlListMappingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" })
  domainSid: string;
}


export class CreateSipIpAccessControlListMappingCreateSipIpAccessControlListMappingRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=IpAccessControlListSid;" })
  ipAccessControlListSid: string;
}


export class CreateSipIpAccessControlListMappingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSipIpAccessControlListMappingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateSipIpAccessControlListMappingPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSipIpAccessControlListMappingCreateSipIpAccessControlListMappingRequest;

  @Metadata()
  security: CreateSipIpAccessControlListMappingSecurity;
}


export class CreateSipIpAccessControlListMappingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountSipSipDomainSipIpAccessControlListMapping?: shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping;
}
