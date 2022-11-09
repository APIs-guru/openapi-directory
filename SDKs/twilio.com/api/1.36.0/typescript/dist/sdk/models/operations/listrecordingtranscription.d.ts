import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTRECORDINGTRANSCRIPTION_SERVERS: string[];
export declare class ListRecordingTranscriptionPathParams extends SpeakeasyBase {
    accountSid: string;
    recordingSid: string;
}
export declare class ListRecordingTranscriptionQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListRecordingTranscriptionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListRecordingTranscriptionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListRecordingTranscriptionPathParams;
    queryParams: ListRecordingTranscriptionQueryParams;
    security: ListRecordingTranscriptionSecurity;
}
export declare class ListRecordingTranscriptionListRecordingTranscriptionResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    transcriptions?: shared.ApiV2010AccountRecordingRecordingTranscription[];
    uri?: string;
}
export declare class ListRecordingTranscriptionResponse extends SpeakeasyBase {
    contentType: string;
    listRecordingTranscriptionResponse?: ListRecordingTranscriptionListRecordingTranscriptionResponse;
    statusCode: number;
}
