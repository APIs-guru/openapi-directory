import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateWorkflowServerList: readonly ["https://taskrouter.twilio.com"];
export declare class UpdateWorkflowPathParams extends SpeakeasyBase {
    sid: string;
    workspaceSid: string;
}
export declare class UpdateWorkflowUpdateWorkflowRequest extends SpeakeasyBase {
    assignmentCallbackUrl?: string;
    configuration?: string;
    fallbackAssignmentCallbackUrl?: string;
    friendlyName?: string;
    reEvaluateTasks?: string;
    taskReservationTimeout?: number;
}
export declare class UpdateWorkflowSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateWorkflowRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateWorkflowPathParams;
    request?: UpdateWorkflowUpdateWorkflowRequest;
    security: UpdateWorkflowSecurity;
}
export declare class UpdateWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceWorkflow?: shared.TaskrouterV1WorkspaceWorkflow;
}
