import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEWORKSPACE_SERVERS: string[];
export declare class UpdateWorkspacePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateWorkspaceUpdateWorkspaceRequest extends SpeakeasyBase {
    defaultActivitySid?: string;
    eventCallbackUrl?: string;
    eventsFilter?: string;
    friendlyName?: string;
    multiTaskEnabled?: boolean;
    prioritizeQueueOrder?: shared.WorkspaceEnumQueueOrderEnum;
    timeoutActivitySid?: string;
}
export declare class UpdateWorkspaceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateWorkspaceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateWorkspacePathParams;
    request?: UpdateWorkspaceUpdateWorkspaceRequest;
    security: UpdateWorkspaceSecurity;
}
export declare class UpdateWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1Workspace?: shared.TaskrouterV1Workspace;
}
