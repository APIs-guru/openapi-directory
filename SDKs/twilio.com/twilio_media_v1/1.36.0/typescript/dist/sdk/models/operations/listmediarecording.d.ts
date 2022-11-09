import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTMEDIARECORDING_SERVERS: string[];
export declare class ListMediaRecordingQueryParams extends SpeakeasyBase {
    order?: shared.MediaRecordingEnumOrderEnum;
    pageSize?: number;
    processorSid?: string;
    sourceSid?: string;
    status?: shared.MediaRecordingEnumStatusEnum;
}
export declare class ListMediaRecordingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListMediaRecordingRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListMediaRecordingQueryParams;
    security: ListMediaRecordingSecurity;
}
export declare class ListMediaRecordingListMediaRecordingResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListMediaRecordingListMediaRecordingResponse extends SpeakeasyBase {
    mediaRecordings?: shared.MediaV1MediaRecording[];
    meta?: ListMediaRecordingListMediaRecordingResponseMeta;
}
export declare class ListMediaRecordingResponse extends SpeakeasyBase {
    contentType: string;
    listMediaRecordingResponse?: ListMediaRecordingListMediaRecordingResponse;
    statusCode: number;
}
