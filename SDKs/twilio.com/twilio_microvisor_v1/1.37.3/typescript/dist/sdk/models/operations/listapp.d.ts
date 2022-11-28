import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListAppServerList: readonly ["https://microvisor.twilio.com"];
export declare class ListAppQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListAppSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListAppListAppResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListAppListAppResponse extends SpeakeasyBase {
    apps?: shared.MicrovisorV1App[];
    meta?: ListAppListAppResponseMeta;
}
export declare class ListAppRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListAppQueryParams;
    security: ListAppSecurity;
}
export declare class ListAppResponse extends SpeakeasyBase {
    contentType: string;
    listAppResponse?: ListAppListAppResponse;
    statusCode: number;
}
