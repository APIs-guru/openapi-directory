import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTCUSTOMERPROFILEEVALUATION_SERVERS: string[];
export declare class ListCustomerProfileEvaluationPathParams extends SpeakeasyBase {
    customerProfileSid: string;
}
export declare class ListCustomerProfileEvaluationQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListCustomerProfileEvaluationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListCustomerProfileEvaluationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListCustomerProfileEvaluationPathParams;
    queryParams: ListCustomerProfileEvaluationQueryParams;
    security: ListCustomerProfileEvaluationSecurity;
}
export declare class ListCustomerProfileEvaluationListCustomerProfileEvaluationResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListCustomerProfileEvaluationListCustomerProfileEvaluationResponse extends SpeakeasyBase {
    meta?: ListCustomerProfileEvaluationListCustomerProfileEvaluationResponseMeta;
    results?: shared.TrusthubV1CustomerProfileCustomerProfileEvaluation[];
}
export declare class ListCustomerProfileEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    listCustomerProfileEvaluationResponse?: ListCustomerProfileEvaluationListCustomerProfileEvaluationResponse;
    statusCode: number;
}
