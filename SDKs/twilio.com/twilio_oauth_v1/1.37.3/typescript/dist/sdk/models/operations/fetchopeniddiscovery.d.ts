import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchOpenidDiscoveryServerList: readonly ["https://oauth.twilio.com"];
export declare class FetchOpenidDiscoverySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchOpenidDiscoveryRequest extends SpeakeasyBase {
    serverUrl?: string;
    security: FetchOpenidDiscoverySecurity;
}
export declare class FetchOpenidDiscoveryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    oauthV1OpenidDiscovery?: shared.OauthV1OpenidDiscovery;
}
