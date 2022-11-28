import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteCustomerProfileChannelEndpointAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class DeleteCustomerProfileChannelEndpointAssignmentPathParams extends SpeakeasyBase {
    customerProfileSid: string;
    sid: string;
}
export declare class DeleteCustomerProfileChannelEndpointAssignmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteCustomerProfileChannelEndpointAssignmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteCustomerProfileChannelEndpointAssignmentPathParams;
    security: DeleteCustomerProfileChannelEndpointAssignmentSecurity;
}
export declare class DeleteCustomerProfileChannelEndpointAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
