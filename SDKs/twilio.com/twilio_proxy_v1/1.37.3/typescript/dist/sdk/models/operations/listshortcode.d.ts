import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListShortCodeServerList: readonly ["https://proxy.twilio.com"];
export declare class ListShortCodePathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class ListShortCodeQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListShortCodeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListShortCodeListShortCodeResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListShortCodeListShortCodeResponse extends SpeakeasyBase {
    meta?: ListShortCodeListShortCodeResponseMeta;
    shortCodes?: shared.ProxyV1ServiceShortCode[];
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
