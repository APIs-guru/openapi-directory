import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATECUSTOMERPROFILEENTITYASSIGNMENT_SERVERS: string[];
export declare class CreateCustomerProfileEntityAssignmentPathParams extends SpeakeasyBase {
    customerProfileSid: string;
}
export declare class CreateCustomerProfileEntityAssignmentCreateCustomerProfileEntityAssignmentRequest extends SpeakeasyBase {
    objectSid: string;
}
export declare class CreateCustomerProfileEntityAssignmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateCustomerProfileEntityAssignmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateCustomerProfileEntityAssignmentPathParams;
    request?: CreateCustomerProfileEntityAssignmentCreateCustomerProfileEntityAssignmentRequest;
    security: CreateCustomerProfileEntityAssignmentSecurity;
}
export declare class CreateCustomerProfileEntityAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1CustomerProfileCustomerProfileEntityAssignment?: shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment;
}
