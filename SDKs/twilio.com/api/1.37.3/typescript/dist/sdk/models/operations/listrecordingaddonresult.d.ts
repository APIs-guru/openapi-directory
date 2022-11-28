import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListRecordingAddOnResultServerList: readonly ["https://api.twilio.com"];
export declare class ListRecordingAddOnResultPathParams extends SpeakeasyBase {
    accountSid: string;
    referenceSid: string;
}
export declare class ListRecordingAddOnResultQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListRecordingAddOnResultSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListRecordingAddOnResultListRecordingAddOnResultResponse extends SpeakeasyBase {
    addOnResults?: shared.ApiV2010AccountRecordingRecordingAddOnResult[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListRecordingAddOnResultRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListRecordingAddOnResultPathParams;
    queryParams: ListRecordingAddOnResultQueryParams;
    security: ListRecordingAddOnResultSecurity;
}
export declare class ListRecordingAddOnResultResponse extends SpeakeasyBase {
    contentType: string;
    listRecordingAddOnResultResponse?: ListRecordingAddOnResultListRecordingAddOnResultResponse;
    statusCode: number;
}
