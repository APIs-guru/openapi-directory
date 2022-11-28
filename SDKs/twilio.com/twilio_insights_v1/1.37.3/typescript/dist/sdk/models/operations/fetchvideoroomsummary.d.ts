import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchVideoRoomSummaryServerList: readonly ["https://insights.twilio.com"];
export declare class FetchVideoRoomSummaryPathParams extends SpeakeasyBase {
    roomSid: string;
}
export declare class FetchVideoRoomSummarySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchVideoRoomSummaryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchVideoRoomSummaryPathParams;
    security: FetchVideoRoomSummarySecurity;
}
export declare class FetchVideoRoomSummaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    insightsV1VideoRoomSummary?: shared.InsightsV1VideoRoomSummary;
}
