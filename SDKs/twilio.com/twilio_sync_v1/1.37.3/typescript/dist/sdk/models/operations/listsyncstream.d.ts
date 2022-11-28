import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSyncStreamServerList: readonly ["https://sync.twilio.com"];
export declare class ListSyncStreamPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class ListSyncStreamQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSyncStreamSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSyncStreamListSyncStreamResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSyncStreamListSyncStreamResponse extends SpeakeasyBase {
    meta?: ListSyncStreamListSyncStreamResponseMeta;
    streams?: shared.SyncV1ServiceSyncStream[];
}
export declare class ListSyncStreamRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSyncStreamPathParams;
    queryParams: ListSyncStreamQueryParams;
    security: ListSyncStreamSecurity;
}
export declare class ListSyncStreamResponse extends SpeakeasyBase {
    contentType: string;
    listSyncStreamResponse?: ListSyncStreamListSyncStreamResponse;
    statusCode: number;
}
