import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchTrunkServerList: readonly ["https://trunking.twilio.com"];
export declare class FetchTrunkPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchTrunkSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTrunkRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchTrunkPathParams;
    security: FetchTrunkSecurity;
}
export declare class FetchTrunkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trunkingV1Trunk?: shared.TrunkingV1Trunk;
}
