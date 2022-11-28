import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchOriginationUrlServerList = [
	"https://trunking.twilio.com",
] as const;


export class FetchOriginationUrlPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" })
  trunkSid: string;
}


export class FetchOriginationUrlSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchOriginationUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchOriginationUrlPathParams;

  @SpeakeasyMetadata()
  security: FetchOriginationUrlSecurity;
}


export class FetchOriginationUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trunkingV1TrunkOriginationUrl?: shared.TrunkingV1TrunkOriginationUrl;
}
