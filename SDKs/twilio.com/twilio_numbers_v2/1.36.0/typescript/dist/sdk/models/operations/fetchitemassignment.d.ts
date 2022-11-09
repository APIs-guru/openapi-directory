import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHITEMASSIGNMENT_SERVERS: string[];
export declare class FetchItemAssignmentPathParams extends SpeakeasyBase {
    bundleSid: string;
    sid: string;
}
export declare class FetchItemAssignmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchItemAssignmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchItemAssignmentPathParams;
    security: FetchItemAssignmentSecurity;
}
export declare class FetchItemAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    numbersV2RegulatoryComplianceBundleItemAssignment?: shared.NumbersV2RegulatoryComplianceBundleItemAssignment;
}
