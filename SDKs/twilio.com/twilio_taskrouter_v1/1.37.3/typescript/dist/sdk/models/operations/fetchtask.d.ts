import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchTaskServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchTaskPathParams extends SpeakeasyBase {
    sid: string;
    workspaceSid: string;
}
export declare class FetchTaskSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTaskRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchTaskPathParams;
    security: FetchTaskSecurity;
}
export declare class FetchTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceTask?: shared.TaskrouterV1WorkspaceTask;
}
