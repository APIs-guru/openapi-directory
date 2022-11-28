import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListServiceServerList: readonly ["https://sync.twilio.com"];
export declare class ListServiceQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListServiceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListServiceListServiceResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListServiceListServiceResponse extends SpeakeasyBase {
    meta?: ListServiceListServiceResponseMeta;
    services?: shared.SyncV1Service[];
}
export declare class ListServiceRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListServiceQueryParams;
    security: ListServiceSecurity;
}
export declare class ListServiceResponse extends SpeakeasyBase {
    contentType: string;
    listServiceResponse?: ListServiceListServiceResponse;
    statusCode: number;
}
