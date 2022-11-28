import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteConnectionPolicyServerList: readonly ["https://voice.twilio.com"];
export declare class DeleteConnectionPolicyPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteConnectionPolicySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteConnectionPolicyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteConnectionPolicyPathParams;
    security: DeleteConnectionPolicySecurity;
}
export declare class DeleteConnectionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
