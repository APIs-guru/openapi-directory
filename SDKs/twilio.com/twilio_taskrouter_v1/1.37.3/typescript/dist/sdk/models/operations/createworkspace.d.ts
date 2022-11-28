import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateWorkspaceServerList: readonly ["https://taskrouter.twilio.com"];
export declare class CreateWorkspaceCreateWorkspaceRequest extends SpeakeasyBase {
    eventCallbackUrl?: string;
    eventsFilter?: string;
    friendlyName: string;
    multiTaskEnabled?: boolean;
    prioritizeQueueOrder?: shared.WorkspaceEnumQueueOrderEnum;
    template?: string;
}
export declare class CreateWorkspaceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateWorkspaceRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateWorkspaceCreateWorkspaceRequest;
    security: CreateWorkspaceSecurity;
}
export declare class CreateWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1Workspace?: shared.TaskrouterV1Workspace;
}
