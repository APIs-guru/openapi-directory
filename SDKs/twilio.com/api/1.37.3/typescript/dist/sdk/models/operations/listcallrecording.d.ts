import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListCallRecordingServerList: readonly ["https://api.twilio.com"];
export declare class ListCallRecordingPathParams extends SpeakeasyBase {
    accountSid: string;
    callSid: string;
}
export declare class ListCallRecordingQueryParams extends SpeakeasyBase {
    dateCreated?: Date;
    dateCreatedLessThan?: Date;
    dateCreatedGreaterThan?: Date;
    pageSize?: number;
}
export declare class ListCallRecordingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListCallRecordingListCallRecordingResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    recordings?: shared.ApiV2010AccountCallCallRecording[];
    start?: number;
    uri?: string;
}
export declare class ListCallRecordingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListCallRecordingPathParams;
    queryParams: ListCallRecordingQueryParams;
    security: ListCallRecordingSecurity;
}
export declare class ListCallRecordingResponse extends SpeakeasyBase {
    contentType: string;
    listCallRecordingResponse?: ListCallRecordingListCallRecordingResponse;
    statusCode: number;
}
