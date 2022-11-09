import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTTRUSTPRODUCT_SERVERS: string[];
export declare class ListTrustProductQueryParams extends SpeakeasyBase {
    friendlyName?: string;
    pageSize?: number;
    policySid?: string;
    status?: shared.TrustProductEnumStatusEnum;
}
export declare class ListTrustProductSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListTrustProductRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListTrustProductQueryParams;
    security: ListTrustProductSecurity;
}
export declare class ListTrustProductListTrustProductResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListTrustProductListTrustProductResponse extends SpeakeasyBase {
    meta?: ListTrustProductListTrustProductResponseMeta;
    results?: shared.TrusthubV1TrustProduct[];
}
export declare class ListTrustProductResponse extends SpeakeasyBase {
    contentType: string;
    listTrustProductResponse?: ListTrustProductListTrustProductResponse;
    statusCode: number;
}
