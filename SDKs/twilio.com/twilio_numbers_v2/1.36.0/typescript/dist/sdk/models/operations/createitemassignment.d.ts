import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEITEMASSIGNMENT_SERVERS: string[];
export declare class CreateItemAssignmentPathParams extends SpeakeasyBase {
    bundleSid: string;
}
export declare class CreateItemAssignmentCreateItemAssignmentRequest extends SpeakeasyBase {
    objectSid: string;
}
export declare class CreateItemAssignmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateItemAssignmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateItemAssignmentPathParams;
    request?: CreateItemAssignmentCreateItemAssignmentRequest;
    security: CreateItemAssignmentSecurity;
}
export declare class CreateItemAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    numbersV2RegulatoryComplianceBundleItemAssignment?: shared.NumbersV2RegulatoryComplianceBundleItemAssignment;
}
