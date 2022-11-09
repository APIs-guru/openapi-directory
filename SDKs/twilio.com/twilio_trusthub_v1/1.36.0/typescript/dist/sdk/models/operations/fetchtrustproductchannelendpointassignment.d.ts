import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHTRUSTPRODUCTCHANNELENDPOINTASSIGNMENT_SERVERS: string[];
export declare class FetchTrustProductChannelEndpointAssignmentPathParams extends SpeakeasyBase {
    sid: string;
    trustProductSid: string;
}
export declare class FetchTrustProductChannelEndpointAssignmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTrustProductChannelEndpointAssignmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchTrustProductChannelEndpointAssignmentPathParams;
    security: FetchTrustProductChannelEndpointAssignmentSecurity;
}
export declare class FetchTrustProductChannelEndpointAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1TrustProductTrustProductChannelEndpointAssignment?: shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment;
}
