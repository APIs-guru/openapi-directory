import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHORIGINATIONURL_SERVERS: string[];
export declare class FetchOriginationUrlPathParams extends SpeakeasyBase {
    sid: string;
    trunkSid: string;
}
export declare class FetchOriginationUrlSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchOriginationUrlRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchOriginationUrlPathParams;
    security: FetchOriginationUrlSecurity;
}
export declare class FetchOriginationUrlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trunkingV1TrunkOriginationUrl?: shared.TrunkingV1TrunkOriginationUrl;
}
