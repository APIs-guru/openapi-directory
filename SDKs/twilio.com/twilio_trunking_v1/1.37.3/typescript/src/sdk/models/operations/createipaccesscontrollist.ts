import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateIpAccessControlListServerList = [
	"https://trunking.twilio.com",
] as const;


export class CreateIpAccessControlListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" })
  trunkSid: string;
}


export class CreateIpAccessControlListCreateIpAccessControlListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=IpAccessControlListSid;" })
  ipAccessControlListSid: string;
}


export class CreateIpAccessControlListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateIpAccessControlListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateIpAccessControlListPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateIpAccessControlListCreateIpAccessControlListRequest;

  @SpeakeasyMetadata()
  security: CreateIpAccessControlListSecurity;
}


export class CreateIpAccessControlListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trunkingV1TrunkIpAccessControlList?: shared.TrunkingV1TrunkIpAccessControlList;
}
