import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListConferenceRecordingServerList: readonly ["https://api.twilio.com"];
export declare class ListConferenceRecordingPathParams extends SpeakeasyBase {
    accountSid: string;
    conferenceSid: string;
}
export declare class ListConferenceRecordingQueryParams extends SpeakeasyBase {
    dateCreated?: Date;
    dateCreatedLessThan?: Date;
    dateCreatedGreaterThan?: Date;
    pageSize?: number;
}
export declare class ListConferenceRecordingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListConferenceRecordingListConferenceRecordingResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    recordings?: shared.ApiV2010AccountConferenceConferenceRecording[];
    start?: number;
    uri?: string;
}
export declare class ListConferenceRecordingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListConferenceRecordingPathParams;
    queryParams: ListConferenceRecordingQueryParams;
    security: ListConferenceRecordingSecurity;
}
export declare class ListConferenceRecordingResponse extends SpeakeasyBase {
    contentType: string;
    listConferenceRecordingResponse?: ListConferenceRecordingListConferenceRecordingResponse;
    statusCode: number;
}
