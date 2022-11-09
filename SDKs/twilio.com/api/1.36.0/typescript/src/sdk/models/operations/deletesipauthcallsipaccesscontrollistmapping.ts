import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const DELETESIPAUTHCALLSIPACCESSCONTROLLISTMAPPING_SERVERS = [
	"https://api.twilio.com",
];



export class DeleteSipAuthCallsIpAccessControlListMappingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" })
  domainSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class DeleteSipAuthCallsIpAccessControlListMappingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class DeleteSipAuthCallsIpAccessControlListMappingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: DeleteSipAuthCallsIpAccessControlListMappingPathParams;

  @Metadata()
  security: DeleteSipAuthCallsIpAccessControlListMappingSecurity;
}


export class DeleteSipAuthCallsIpAccessControlListMappingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
