import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTBILLINGPERIOD_SERVERS: string[];
export declare class ListBillingPeriodPathParams extends SpeakeasyBase {
    simSid: string;
}
export declare class ListBillingPeriodQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListBillingPeriodSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListBillingPeriodRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListBillingPeriodPathParams;
    queryParams: ListBillingPeriodQueryParams;
    security: ListBillingPeriodSecurity;
}
export declare class ListBillingPeriodListBillingPeriodResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListBillingPeriodListBillingPeriodResponse extends SpeakeasyBase {
    billingPeriods?: shared.SupersimV1SimBillingPeriod[];
    meta?: ListBillingPeriodListBillingPeriodResponseMeta;
}
export declare class ListBillingPeriodResponse extends SpeakeasyBase {
    contentType: string;
    listBillingPeriodResponse?: ListBillingPeriodListBillingPeriodResponse;
    statusCode: number;
}
