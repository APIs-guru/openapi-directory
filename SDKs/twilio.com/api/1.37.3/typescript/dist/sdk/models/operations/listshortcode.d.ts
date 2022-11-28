import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListShortCodeServerList: readonly ["https://api.twilio.com"];
export declare class ListShortCodePathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListShortCodeQueryParams extends SpeakeasyBase {
    friendlyName?: string;
    pageSize?: number;
    shortCode?: string;
}
export declare class ListShortCodeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListShortCodeListShortCodeResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    shortCodes?: shared.ApiV2010AccountShortCode[];
    start?: number;
    uri?: string;
}
export declare class ListShortCodeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListShortCodePathParams;
    queryParams: ListShortCodeQueryParams;
    security: ListShortCodeSecurity;
}
export declare class ListShortCodeResponse extends SpeakeasyBase {
    contentType: string;
    listShortCodeResponse?: ListShortCodeListShortCodeResponse;
    statusCode: number;
}
