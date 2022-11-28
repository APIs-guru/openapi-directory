import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateCustomerProfileChannelEndpointAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class CreateCustomerProfileChannelEndpointAssignmentPathParams extends SpeakeasyBase {
    customerProfileSid: string;
}
export declare class CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest extends SpeakeasyBase {
    channelEndpointSid: string;
    channelEndpointType: string;
}
export declare class CreateCustomerProfileChannelEndpointAssignmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateCustomerProfileChannelEndpointAssignmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateCustomerProfileChannelEndpointAssignmentPathParams;
    request?: CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest;
    security: CreateCustomerProfileChannelEndpointAssignmentSecurity;
}
export declare class CreateCustomerProfileChannelEndpointAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment?: shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment;
}
