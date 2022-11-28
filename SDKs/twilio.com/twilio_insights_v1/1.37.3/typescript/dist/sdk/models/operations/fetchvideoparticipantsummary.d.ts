import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchVideoParticipantSummaryServerList: readonly ["https://insights.twilio.com"];
export declare class FetchVideoParticipantSummaryPathParams extends SpeakeasyBase {
    participantSid: string;
    roomSid: string;
}
export declare class FetchVideoParticipantSummarySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchVideoParticipantSummaryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchVideoParticipantSummaryPathParams;
    security: FetchVideoParticipantSummarySecurity;
}
export declare class FetchVideoParticipantSummaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    insightsV1VideoRoomSummaryVideoParticipantSummary?: shared.InsightsV1VideoRoomSummaryVideoParticipantSummary;
}
