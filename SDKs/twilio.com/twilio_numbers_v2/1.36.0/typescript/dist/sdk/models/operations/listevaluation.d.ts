import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTEVALUATION_SERVERS: string[];
export declare class ListEvaluationPathParams extends SpeakeasyBase {
    bundleSid: string;
}
export declare class ListEvaluationQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListEvaluationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListEvaluationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListEvaluationPathParams;
    queryParams: ListEvaluationQueryParams;
    security: ListEvaluationSecurity;
}
export declare class ListEvaluationListEvaluationResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListEvaluationListEvaluationResponse extends SpeakeasyBase {
    meta?: ListEvaluationListEvaluationResponseMeta;
    results?: shared.NumbersV2RegulatoryComplianceBundleEvaluation[];
}
export declare class ListEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    listEvaluationResponse?: ListEvaluationListEvaluationResponse;
    statusCode: number;
}
