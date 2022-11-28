import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListAuthorizedConnectAppServerList: readonly ["https://api.twilio.com"];
export declare class ListAuthorizedConnectAppPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListAuthorizedConnectAppQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListAuthorizedConnectAppSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListAuthorizedConnectAppListAuthorizedConnectAppResponse extends SpeakeasyBase {
    authorizedConnectApps?: shared.ApiV2010AccountAuthorizedConnectApp[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListAuthorizedConnectAppRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListAuthorizedConnectAppPathParams;
    queryParams: ListAuthorizedConnectAppQueryParams;
    security: ListAuthorizedConnectAppSecurity;
}
export declare class ListAuthorizedConnectAppResponse extends SpeakeasyBase {
    contentType: string;
    listAuthorizedConnectAppResponse?: ListAuthorizedConnectAppListAuthorizedConnectAppResponse;
    statusCode: number;
}
