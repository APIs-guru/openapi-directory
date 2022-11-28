import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSipIpAccessControlListMappingServerList = [
	"https://api.twilio.com",
] as const;


export class CreateSipIpAccessControlListMappingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" })
  domainSid: string;
}


export class CreateSipIpAccessControlListMappingCreateSipIpAccessControlListMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=IpAccessControlListSid;" })
  ipAccessControlListSid: string;
}


export class CreateSipIpAccessControlListMappingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSipIpAccessControlListMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSipIpAccessControlListMappingPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSipIpAccessControlListMappingCreateSipIpAccessControlListMappingRequest;

  @SpeakeasyMetadata()
  security: CreateSipIpAccessControlListMappingSecurity;
}


export class CreateSipIpAccessControlListMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountSipSipDomainSipIpAccessControlListMapping?: shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping;
}
