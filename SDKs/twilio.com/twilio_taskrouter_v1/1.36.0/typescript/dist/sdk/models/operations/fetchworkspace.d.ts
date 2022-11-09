import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHWORKSPACE_SERVERS: string[];
export declare class FetchWorkspacePathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchWorkspaceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchWorkspaceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchWorkspacePathParams;
    security: FetchWorkspaceSecurity;
}
export declare class FetchWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1Workspace?: shared.TaskrouterV1Workspace;
}
