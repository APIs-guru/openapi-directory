import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListVideoParticipantSummaryServerList: readonly ["https://insights.twilio.com"];
export declare class ListVideoParticipantSummaryPathParams extends SpeakeasyBase {
    roomSid: string;
}
export declare class ListVideoParticipantSummaryQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListVideoParticipantSummarySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListVideoParticipantSummaryListVideoParticipantSummaryResponse extends SpeakeasyBase {
    meta?: ListVideoParticipantSummaryListVideoParticipantSummaryResponseMeta;
    participants?: shared.InsightsV1VideoRoomSummaryVideoParticipantSummary[];
}
export declare class ListVideoParticipantSummaryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListVideoParticipantSummaryPathParams;
    queryParams: ListVideoParticipantSummaryQueryParams;
    security: ListVideoParticipantSummarySecurity;
}
export declare class ListVideoParticipantSummaryResponse extends SpeakeasyBase {
    contentType: string;
    listVideoParticipantSummaryResponse?: ListVideoParticipantSummaryListVideoParticipantSummaryResponse;
    statusCode: number;
}
