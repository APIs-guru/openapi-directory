import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListApplicationServerList: readonly ["https://api.twilio.com"];
export declare class ListApplicationPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListApplicationQueryParams extends SpeakeasyBase {
    friendlyName?: string;
    pageSize?: number;
}
export declare class ListApplicationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListApplicationListApplicationResponse extends SpeakeasyBase {
    applications?: shared.ApiV2010AccountApplication[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListApplicationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListApplicationPathParams;
    queryParams: ListApplicationQueryParams;
    security: ListApplicationSecurity;
}
export declare class ListApplicationResponse extends SpeakeasyBase {
    contentType: string;
    listApplicationResponse?: ListApplicationListApplicationResponse;
    statusCode: number;
}
