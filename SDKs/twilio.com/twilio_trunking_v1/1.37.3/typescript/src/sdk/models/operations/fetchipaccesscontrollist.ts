import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchIpAccessControlListServerList = [
	"https://trunking.twilio.com",
] as const;


export class FetchIpAccessControlListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" })
  trunkSid: string;
}


export class FetchIpAccessControlListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchIpAccessControlListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchIpAccessControlListPathParams;

  @SpeakeasyMetadata()
  security: FetchIpAccessControlListSecurity;
}


export class FetchIpAccessControlListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trunkingV1TrunkIpAccessControlList?: shared.TrunkingV1TrunkIpAccessControlList;
}
