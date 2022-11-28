import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListTrustProductEvaluationServerList: readonly ["https://trusthub.twilio.com"];
export declare class ListTrustProductEvaluationPathParams extends SpeakeasyBase {
    trustProductSid: string;
}
export declare class ListTrustProductEvaluationQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListTrustProductEvaluationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListTrustProductEvaluationListTrustProductEvaluationResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListTrustProductEvaluationListTrustProductEvaluationResponse extends SpeakeasyBase {
    meta?: ListTrustProductEvaluationListTrustProductEvaluationResponseMeta;
    results?: shared.TrusthubV1TrustProductTrustProductEvaluation[];
}
export declare class ListTrustProductEvaluationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListTrustProductEvaluationPathParams;
    queryParams: ListTrustProductEvaluationQueryParams;
    security: ListTrustProductEvaluationSecurity;
}
export declare class ListTrustProductEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    listTrustProductEvaluationResponse?: ListTrustProductEvaluationListTrustProductEvaluationResponse;
    statusCode: number;
}
