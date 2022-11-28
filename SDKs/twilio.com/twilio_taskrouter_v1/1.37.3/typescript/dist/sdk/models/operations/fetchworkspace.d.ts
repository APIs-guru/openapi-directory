import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchWorkspaceServerList: readonly ["https://taskrouter.twilio.com"];
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
