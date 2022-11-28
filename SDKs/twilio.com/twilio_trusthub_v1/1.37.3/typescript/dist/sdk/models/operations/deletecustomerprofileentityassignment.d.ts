import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteCustomerProfileEntityAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class DeleteCustomerProfileEntityAssignmentPathParams extends SpeakeasyBase {
    customerProfileSid: string;
    sid: string;
}
export declare class DeleteCustomerProfileEntityAssignmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteCustomerProfileEntityAssignmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteCustomerProfileEntityAssignmentPathParams;
    security: DeleteCustomerProfileEntityAssignmentSecurity;
}
export declare class DeleteCustomerProfileEntityAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
