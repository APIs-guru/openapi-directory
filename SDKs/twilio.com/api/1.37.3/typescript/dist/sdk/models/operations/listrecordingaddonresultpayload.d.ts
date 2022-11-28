import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListRecordingAddOnResultPayloadServerList: readonly ["https://api.twilio.com"];
export declare class ListRecordingAddOnResultPayloadPathParams extends SpeakeasyBase {
    accountSid: string;
    addOnResultSid: string;
    referenceSid: string;
}
export declare class ListRecordingAddOnResultPayloadQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListRecordingAddOnResultPayloadSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    payloads?: shared.ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload[];
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListRecordingAddOnResultPayloadRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListRecordingAddOnResultPayloadPathParams;
    queryParams: ListRecordingAddOnResultPayloadQueryParams;
    security: ListRecordingAddOnResultPayloadSecurity;
}
export declare class ListRecordingAddOnResultPayloadResponse extends SpeakeasyBase {
    contentType: string;
    listRecordingAddOnResultPayloadResponse?: ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse;
    statusCode: number;
}
