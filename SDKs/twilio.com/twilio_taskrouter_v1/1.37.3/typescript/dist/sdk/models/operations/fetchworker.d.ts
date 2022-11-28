import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchWorkerServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchWorkerPathParams extends SpeakeasyBase {
    sid: string;
    workspaceSid: string;
}
export declare class FetchWorkerSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchWorkerRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchWorkerPathParams;
    security: FetchWorkerSecurity;
}
export declare class FetchWorkerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceWorker?: shared.TaskrouterV1WorkspaceWorker;
}
