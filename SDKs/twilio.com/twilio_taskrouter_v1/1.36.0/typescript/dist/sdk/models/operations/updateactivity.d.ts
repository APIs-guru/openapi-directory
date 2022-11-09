import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEACTIVITY_SERVERS: string[];
export declare class UpdateActivityPathParams extends SpeakeasyBase {
    sid: string;
    workspaceSid: string;
}
export declare class UpdateActivityUpdateActivityRequest extends SpeakeasyBase {
    friendlyName?: string;
}
export declare class UpdateActivitySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateActivityRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateActivityPathParams;
    request?: UpdateActivityUpdateActivityRequest;
    security: UpdateActivitySecurity;
}
export declare class UpdateActivityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceActivity?: shared.TaskrouterV1WorkspaceActivity;
}
