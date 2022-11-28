import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListRecordingServerList: readonly ["https://api.twilio.com"];
export declare class ListRecordingPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListRecordingQueryParams extends SpeakeasyBase {
    callSid?: string;
    conferenceSid?: string;
    dateCreated?: Date;
    dateCreatedLessThan?: Date;
    dateCreatedGreaterThan?: Date;
    includeSoftDeleted?: boolean;
    pageSize?: number;
}
export declare class ListRecordingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListRecordingListRecordingResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    recordings?: shared.ApiV2010AccountRecording[];
    start?: number;
    uri?: string;
}
export declare class ListRecordingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListRecordingPathParams;
    queryParams: ListRecordingQueryParams;
    security: ListRecordingSecurity;
}
export declare class ListRecordingResponse extends SpeakeasyBase {
    contentType: string;
    listRecordingResponse?: ListRecordingListRecordingResponse;
    statusCode: number;
}
