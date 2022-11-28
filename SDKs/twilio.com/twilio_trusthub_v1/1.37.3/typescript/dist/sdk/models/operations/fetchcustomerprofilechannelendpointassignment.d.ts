import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchCustomerProfileChannelEndpointAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class FetchCustomerProfileChannelEndpointAssignmentPathParams extends SpeakeasyBase {
    customerProfileSid: string;
    sid: string;
}
export declare class FetchCustomerProfileChannelEndpointAssignmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchCustomerProfileChannelEndpointAssignmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchCustomerProfileChannelEndpointAssignmentPathParams;
    security: FetchCustomerProfileChannelEndpointAssignmentSecurity;
}
export declare class FetchCustomerProfileChannelEndpointAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment?: shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment;
}
