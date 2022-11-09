import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEACTIVITY_SERVERS: string[];
export declare class CreateActivityPathParams extends SpeakeasyBase {
    workspaceSid: string;
}
export declare class CreateActivityCreateActivityRequest extends SpeakeasyBase {
    available?: boolean;
    friendlyName: string;
}
export declare class CreateActivitySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateActivityRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateActivityPathParams;
    request?: CreateActivityCreateActivityRequest;
    security: CreateActivitySecurity;
}
export declare class CreateActivityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceActivity?: shared.TaskrouterV1WorkspaceActivity;
}
