import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateWorkflowServerList: readonly ["https://taskrouter.twilio.com"];
export declare class CreateWorkflowPathParams extends SpeakeasyBase {
    workspaceSid: string;
}
export declare class CreateWorkflowCreateWorkflowRequest extends SpeakeasyBase {
    assignmentCallbackUrl?: string;
    configuration: string;
    fallbackAssignmentCallbackUrl?: string;
    friendlyName: string;
    taskReservationTimeout?: number;
}
export declare class CreateWorkflowSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateWorkflowRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateWorkflowPathParams;
    request?: CreateWorkflowCreateWorkflowRequest;
    security: CreateWorkflowSecurity;
}
export declare class CreateWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceWorkflow?: shared.TaskrouterV1WorkspaceWorkflow;
}
