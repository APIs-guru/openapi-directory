import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchOpenidDiscoveryServerList = [
	"https://oauth.twilio.com",
] as const;


export class FetchOpenidDiscoverySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchOpenidDiscoveryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  security: FetchOpenidDiscoverySecurity;
}


export class FetchOpenidDiscoveryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  oauthV1OpenidDiscovery?: shared.OauthV1OpenidDiscovery;
}
