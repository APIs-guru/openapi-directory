import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEIPACCESSCONTROLLIST_SERVERS = [
	"https://trunking.twilio.com",
];



export class CreateIpAccessControlListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" })
  trunkSid: string;
}


export class CreateIpAccessControlListCreateIpAccessControlListRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=IpAccessControlListSid;" })
  ipAccessControlListSid: string;
}


export class CreateIpAccessControlListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateIpAccessControlListRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateIpAccessControlListPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateIpAccessControlListCreateIpAccessControlListRequest;

  @Metadata()
  security: CreateIpAccessControlListSecurity;
}


export class CreateIpAccessControlListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trunkingV1TrunkIpAccessControlList?: shared.TrunkingV1TrunkIpAccessControlList;
}
