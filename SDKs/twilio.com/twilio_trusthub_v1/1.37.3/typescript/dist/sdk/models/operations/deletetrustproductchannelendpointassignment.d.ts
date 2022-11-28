import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteTrustProductChannelEndpointAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class DeleteTrustProductChannelEndpointAssignmentPathParams extends SpeakeasyBase {
    sid: string;
    trustProductSid: string;
}
export declare class DeleteTrustProductChannelEndpointAssignmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteTrustProductChannelEndpointAssignmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteTrustProductChannelEndpointAssignmentPathParams;
    security: DeleteTrustProductChannelEndpointAssignmentSecurity;
}
export declare class DeleteTrustProductChannelEndpointAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
