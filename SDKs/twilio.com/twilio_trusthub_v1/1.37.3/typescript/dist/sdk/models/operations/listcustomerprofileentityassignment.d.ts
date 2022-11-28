import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListCustomerProfileEntityAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class ListCustomerProfileEntityAssignmentPathParams extends SpeakeasyBase {
    customerProfileSid: string;
}
export declare class ListCustomerProfileEntityAssignmentQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListCustomerProfileEntityAssignmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse extends SpeakeasyBase {
    meta?: ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponseMeta;
    results?: shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment[];
}
export declare class ListCustomerProfileEntityAssignmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListCustomerProfileEntityAssignmentPathParams;
    queryParams: ListCustomerProfileEntityAssignmentQueryParams;
    security: ListCustomerProfileEntityAssignmentSecurity;
}
export declare class ListCustomerProfileEntityAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    listCustomerProfileEntityAssignmentResponse?: ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse;
    statusCode: number;
}
