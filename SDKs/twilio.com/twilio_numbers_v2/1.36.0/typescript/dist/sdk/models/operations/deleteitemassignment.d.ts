import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEITEMASSIGNMENT_SERVERS: string[];
export declare class DeleteItemAssignmentPathParams extends SpeakeasyBase {
    bundleSid: string;
    sid: string;
}
export declare class DeleteItemAssignmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteItemAssignmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteItemAssignmentPathParams;
    security: DeleteItemAssignmentSecurity;
}
export declare class DeleteItemAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
