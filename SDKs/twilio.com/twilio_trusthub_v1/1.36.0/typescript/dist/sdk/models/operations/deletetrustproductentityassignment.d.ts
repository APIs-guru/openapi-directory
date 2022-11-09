import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETETRUSTPRODUCTENTITYASSIGNMENT_SERVERS: string[];
export declare class DeleteTrustProductEntityAssignmentPathParams extends SpeakeasyBase {
    sid: string;
    trustProductSid: string;
}
export declare class DeleteTrustProductEntityAssignmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteTrustProductEntityAssignmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteTrustProductEntityAssignmentPathParams;
    security: DeleteTrustProductEntityAssignmentSecurity;
}
export declare class DeleteTrustProductEntityAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
