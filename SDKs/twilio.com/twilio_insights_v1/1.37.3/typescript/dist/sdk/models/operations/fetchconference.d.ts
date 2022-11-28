import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchConferenceServerList: readonly ["https://insights.twilio.com"];
export declare class FetchConferencePathParams extends SpeakeasyBase {
    conferenceSid: string;
}
export declare class FetchConferenceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchConferenceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchConferencePathParams;
    security: FetchConferenceSecurity;
}
export declare class FetchConferenceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    insightsV1Conference?: shared.InsightsV1Conference;
}
