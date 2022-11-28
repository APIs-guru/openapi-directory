import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchWorkflowServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchWorkflowPathParams extends SpeakeasyBase {
    sid: string;
    workspaceSid: string;
}
export declare class FetchWorkflowSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchWorkflowRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchWorkflowPathParams;
    security: FetchWorkflowSecurity;
}
export declare class FetchWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceWorkflow?: shared.TaskrouterV1WorkspaceWorkflow;
}
