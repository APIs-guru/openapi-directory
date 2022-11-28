import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchActivityServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchActivityPathParams extends SpeakeasyBase {
    sid: string;
    workspaceSid: string;
}
export declare class FetchActivitySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchActivityRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchActivityPathParams;
    security: FetchActivitySecurity;
}
export declare class FetchActivityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceActivity?: shared.TaskrouterV1WorkspaceActivity;
}
