import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTALPHASENDER_SERVERS: string[];
export declare class ListAlphaSenderPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class ListAlphaSenderQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListAlphaSenderSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListAlphaSenderRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListAlphaSenderPathParams;
    queryParams: ListAlphaSenderQueryParams;
    security: ListAlphaSenderSecurity;
}
export declare class ListAlphaSenderListAlphaSenderResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListAlphaSenderListAlphaSenderResponse extends SpeakeasyBase {
    alphaSenders?: shared.MessagingV1ServiceAlphaSender[];
    meta?: ListAlphaSenderListAlphaSenderResponseMeta;
}
export declare class ListAlphaSenderResponse extends SpeakeasyBase {
    contentType: string;
    listAlphaSenderResponse?: ListAlphaSenderListAlphaSenderResponse;
    statusCode: number;
}
