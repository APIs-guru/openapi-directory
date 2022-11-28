import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListTrustProductEntityAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class ListTrustProductEntityAssignmentPathParams extends SpeakeasyBase {
    trustProductSid: string;
}
export declare class ListTrustProductEntityAssignmentQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListTrustProductEntityAssignmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse extends SpeakeasyBase {
    meta?: ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponseMeta;
    results?: shared.TrusthubV1TrustProductTrustProductEntityAssignment[];
}
export declare class ListTrustProductEntityAssignmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListTrustProductEntityAssignmentPathParams;
    queryParams: ListTrustProductEntityAssignmentQueryParams;
    security: ListTrustProductEntityAssignmentSecurity;
}
export declare class ListTrustProductEntityAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    listTrustProductEntityAssignmentResponse?: ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse;
    statusCode: number;
}
