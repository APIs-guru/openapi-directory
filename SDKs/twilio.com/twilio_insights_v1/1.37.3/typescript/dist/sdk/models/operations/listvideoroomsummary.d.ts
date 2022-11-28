import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListVideoRoomSummaryServerList: readonly ["https://insights.twilio.com"];
export declare class ListVideoRoomSummaryQueryParams extends SpeakeasyBase {
    codec?: shared.VideoRoomSummaryEnumCodecEnum[];
    createdAfter?: Date;
    createdBefore?: Date;
    pageSize?: number;
    roomName?: string;
    roomType?: shared.VideoRoomSummaryEnumRoomTypeEnum[];
}
export declare class ListVideoRoomSummarySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListVideoRoomSummaryListVideoRoomSummaryResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListVideoRoomSummaryListVideoRoomSummaryResponse extends SpeakeasyBase {
    meta?: ListVideoRoomSummaryListVideoRoomSummaryResponseMeta;
    rooms?: shared.InsightsV1VideoRoomSummary[];
}
export declare class ListVideoRoomSummaryRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListVideoRoomSummaryQueryParams;
    security: ListVideoRoomSummarySecurity;
}
export declare class ListVideoRoomSummaryResponse extends SpeakeasyBase {
    contentType: string;
    listVideoRoomSummaryResponse?: ListVideoRoomSummaryListVideoRoomSummaryResponse;
    statusCode: number;
}
