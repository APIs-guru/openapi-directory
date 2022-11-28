import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteWorkflowServerList: readonly ["https://taskrouter.twilio.com"];
export declare class DeleteWorkflowPathParams extends SpeakeasyBase {
    sid: string;
    workspaceSid: string;
}
export declare class DeleteWorkflowSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteWorkflowRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteWorkflowPathParams;
    security: DeleteWorkflowSecurity;
}
export declare class DeleteWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
