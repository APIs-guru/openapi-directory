import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTSERVICE_SERVERS: string[];
export declare class ListServiceQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListServiceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListServiceRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListServiceQueryParams;
    security: ListServiceSecurity;
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
    services?: shared.IpMessagingV2Service[];
}
export declare class ListServiceResponse extends SpeakeasyBase {
    contentType: string;
    listServiceResponse?: ListServiceListServiceResponse;
    statusCode: number;
}
