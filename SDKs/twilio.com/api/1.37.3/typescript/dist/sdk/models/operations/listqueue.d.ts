import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListQueueServerList: readonly ["https://api.twilio.com"];
export declare class ListQueuePathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListQueueQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListQueueSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListQueueListQueueResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    queues?: shared.ApiV2010AccountQueue[];
    start?: number;
    uri?: string;
}
export declare class ListQueueRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListQueuePathParams;
    queryParams: ListQueueQueryParams;
    security: ListQueueSecurity;
}
export declare class ListQueueResponse extends SpeakeasyBase {
    contentType: string;
    listQueueResponse?: ListQueueListQueueResponse;
    statusCode: number;
}
