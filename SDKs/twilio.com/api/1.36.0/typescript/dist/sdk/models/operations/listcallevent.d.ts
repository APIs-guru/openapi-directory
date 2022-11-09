import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTCALLEVENT_SERVERS: string[];
export declare class ListCallEventPathParams extends SpeakeasyBase {
    accountSid: string;
    callSid: string;
}
export declare class ListCallEventQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListCallEventSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListCallEventRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListCallEventPathParams;
    queryParams: ListCallEventQueryParams;
    security: ListCallEventSecurity;
}
export declare class ListCallEventListCallEventResponse extends SpeakeasyBase {
    end?: number;
    events?: shared.ApiV2010AccountCallCallEvent[];
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListCallEventResponse extends SpeakeasyBase {
    contentType: string;
    listCallEventResponse?: ListCallEventListCallEventResponse;
    statusCode: number;
}
