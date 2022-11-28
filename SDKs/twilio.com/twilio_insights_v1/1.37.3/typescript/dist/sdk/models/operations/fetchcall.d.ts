import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchCallServerList: readonly ["https://insights.twilio.com"];
export declare class FetchCallPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchCallSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchCallRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchCallPathParams;
    security: FetchCallSecurity;
}
export declare class FetchCallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    insightsV1Call?: shared.InsightsV1Call;
}
