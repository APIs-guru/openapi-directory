import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHORIGINATIONURL_SERVERS = [
	"https://trunking.twilio.com",
];



export class FetchOriginationUrlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" })
  trunkSid: string;
}


export class FetchOriginationUrlSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchOriginationUrlRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchOriginationUrlPathParams;

  @Metadata()
  security: FetchOriginationUrlSecurity;
}


export class FetchOriginationUrlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trunkingV1TrunkOriginationUrl?: shared.TrunkingV1TrunkOriginationUrl;
}
