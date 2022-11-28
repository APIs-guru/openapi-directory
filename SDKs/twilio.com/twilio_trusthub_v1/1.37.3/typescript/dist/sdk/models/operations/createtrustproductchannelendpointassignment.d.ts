import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateTrustProductChannelEndpointAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class CreateTrustProductChannelEndpointAssignmentPathParams extends SpeakeasyBase {
    trustProductSid: string;
}
export declare class CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest extends SpeakeasyBase {
    channelEndpointSid: string;
    channelEndpointType: string;
}
export declare class CreateTrustProductChannelEndpointAssignmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateTrustProductChannelEndpointAssignmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateTrustProductChannelEndpointAssignmentPathParams;
    request?: CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest;
    security: CreateTrustProductChannelEndpointAssignmentSecurity;
}
export declare class CreateTrustProductChannelEndpointAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1TrustProductTrustProductChannelEndpointAssignment?: shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment;
}
