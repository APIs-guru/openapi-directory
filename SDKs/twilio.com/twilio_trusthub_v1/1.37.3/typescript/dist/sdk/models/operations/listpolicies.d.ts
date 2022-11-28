import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListPoliciesServerList: readonly ["https://trusthub.twilio.com"];
export declare class ListPoliciesQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListPoliciesSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListPoliciesListPoliciesResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListPoliciesListPoliciesResponse extends SpeakeasyBase {
    meta?: ListPoliciesListPoliciesResponseMeta;
    results?: shared.TrusthubV1Policies[];
}
export declare class ListPoliciesRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListPoliciesQueryParams;
    security: ListPoliciesSecurity;
}
export declare class ListPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    listPoliciesResponse?: ListPoliciesListPoliciesResponse;
    statusCode: number;
}
