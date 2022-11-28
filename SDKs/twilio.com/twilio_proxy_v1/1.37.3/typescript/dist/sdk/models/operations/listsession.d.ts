import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSessionServerList: readonly ["https://proxy.twilio.com"];
export declare class ListSessionPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class ListSessionQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSessionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSessionListSessionResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListSessionListSessionResponse extends SpeakeasyBase {
    meta?: ListSessionListSessionResponseMeta;
    sessions?: shared.ProxyV1ServiceSession[];
}
export declare class ListSessionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSessionPathParams;
    queryParams: ListSessionQueryParams;
    security: ListSessionSecurity;
}
export declare class ListSessionResponse extends SpeakeasyBase {
    contentType: string;
    listSessionResponse?: ListSessionListSessionResponse;
    statusCode: number;
}
