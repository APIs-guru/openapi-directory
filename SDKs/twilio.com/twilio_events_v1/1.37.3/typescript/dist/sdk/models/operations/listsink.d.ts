import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSinkServerList: readonly ["https://events.twilio.com"];
export declare class ListSinkQueryParams extends SpeakeasyBase {
    inUse?: boolean;
    pageSize?: number;
    status?: string;
}
export declare class ListSinkSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSinkListSinkResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSinkListSinkResponse extends SpeakeasyBase {
    meta?: ListSinkListSinkResponseMeta;
    sinks?: shared.EventsV1Sink[];
}
export declare class ListSinkRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListSinkQueryParams;
    security: ListSinkSecurity;
}
export declare class ListSinkResponse extends SpeakeasyBase {
    contentType: string;
    listSinkResponse?: ListSinkListSinkResponse;
    statusCode: number;
}
