import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListRecordingServerList: readonly ["https://video.twilio.com"];
export declare class ListRecordingQueryParams extends SpeakeasyBase {
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    groupingSid?: string[];
    mediaType?: shared.RecordingEnumTypeEnum;
    pageSize?: number;
    sourceSid?: string;
    status?: shared.RecordingEnumStatusEnum;
}
export declare class ListRecordingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListRecordingListRecordingResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListRecordingListRecordingResponse extends SpeakeasyBase {
    meta?: ListRecordingListRecordingResponseMeta;
    recordings?: shared.VideoV1Recording[];
}
export declare class ListRecordingRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListRecordingQueryParams;
    security: ListRecordingSecurity;
}
export declare class ListRecordingResponse extends SpeakeasyBase {
    contentType: string;
    listRecordingResponse?: ListRecordingListRecordingResponse;
    statusCode: number;
}
