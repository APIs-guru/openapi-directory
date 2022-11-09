import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTRATEPLAN_SERVERS: string[];
export declare class ListRatePlanQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListRatePlanSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListRatePlanRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListRatePlanQueryParams;
    security: ListRatePlanSecurity;
}
export declare class ListRatePlanListRatePlanResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListRatePlanListRatePlanResponse extends SpeakeasyBase {
    meta?: ListRatePlanListRatePlanResponseMeta;
    ratePlans?: shared.WirelessV1RatePlan[];
}
export declare class ListRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    listRatePlanResponse?: ListRatePlanListRatePlanResponse;
    statusCode: number;
}
