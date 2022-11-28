import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchNetworkServerList: readonly ["https://supersim.twilio.com"];
export declare class FetchNetworkPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchNetworkSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchNetworkRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchNetworkPathParams;
    security: FetchNetworkSecurity;
}
export declare class FetchNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supersimV1Network?: shared.SupersimV1Network;
}
