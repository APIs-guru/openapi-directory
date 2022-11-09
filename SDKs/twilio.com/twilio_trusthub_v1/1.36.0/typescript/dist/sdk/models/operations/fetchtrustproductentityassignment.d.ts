import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHTRUSTPRODUCTENTITYASSIGNMENT_SERVERS: string[];
export declare class FetchTrustProductEntityAssignmentPathParams extends SpeakeasyBase {
    sid: string;
    trustProductSid: string;
}
export declare class FetchTrustProductEntityAssignmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTrustProductEntityAssignmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchTrustProductEntityAssignmentPathParams;
    security: FetchTrustProductEntityAssignmentSecurity;
}
export declare class FetchTrustProductEntityAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trusthubV1TrustProductTrustProductEntityAssignment?: shared.TrusthubV1TrustProductTrustProductEntityAssignment;
}
