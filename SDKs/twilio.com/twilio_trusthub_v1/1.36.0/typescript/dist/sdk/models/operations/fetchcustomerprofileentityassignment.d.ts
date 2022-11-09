import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHCUSTOMERPROFILEENTITYASSIGNMENT_SERVERS: string[];
export declare class FetchCustomerProfileEntityAssignmentPathParams extends SpeakeasyBase {
    customerProfileSid: string;
    sid: string;
}
export declare class FetchCustomerProfileEntityAssignmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchCustomerProfileEntityAssignmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchCustomerProfileEntityAssignmentPathParams;
    security: FetchCustomerProfileEntityAssignmentSecurity;
}
export declare class FetchCustomerProfileEntityAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1CustomerProfileCustomerProfileEntityAssignment?: shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment;
}
