import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchWorkerChannelServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchWorkerChannelPathParams extends SpeakeasyBase {
    sid: string;
    workerSid: string;
    workspaceSid: string;
}
export declare class FetchWorkerChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchWorkerChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchWorkerChannelPathParams;
    security: FetchWorkerChannelSecurity;
}
export declare class FetchWorkerChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceWorkerWorkerChannel?: shared.TaskrouterV1WorkspaceWorkerWorkerChannel;
}
