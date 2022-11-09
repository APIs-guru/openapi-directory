import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETECONNECTIONPOLICYTARGET_SERVERS: string[];
export declare class DeleteConnectionPolicyTargetPathParams extends SpeakeasyBase {
    connectionPolicySid: string;
    sid: string;
}
export declare class DeleteConnectionPolicyTargetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteConnectionPolicyTargetRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteConnectionPolicyTargetPathParams;
    security: DeleteConnectionPolicyTargetSecurity;
}
export declare class DeleteConnectionPolicyTargetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
