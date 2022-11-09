import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTCONNECTAPP_SERVERS: string[];
export declare class ListConnectAppPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListConnectAppQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListConnectAppSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListConnectAppRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListConnectAppPathParams;
    queryParams: ListConnectAppQueryParams;
    security: ListConnectAppSecurity;
}
export declare class ListConnectAppListConnectAppResponse extends SpeakeasyBase {
    connectApps?: shared.ApiV2010AccountConnectApp[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListConnectAppResponse extends SpeakeasyBase {
    contentType: string;
    listConnectAppResponse?: ListConnectAppListConnectAppResponse;
    statusCode: number;
}
