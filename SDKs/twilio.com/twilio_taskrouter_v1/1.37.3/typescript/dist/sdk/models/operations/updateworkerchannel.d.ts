import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateWorkerChannelServerList: readonly ["https://taskrouter.twilio.com"];
export declare class UpdateWorkerChannelPathParams extends SpeakeasyBase {
    sid: string;
    workerSid: string;
    workspaceSid: string;
}
export declare class UpdateWorkerChannelUpdateWorkerChannelRequest extends SpeakeasyBase {
    available?: boolean;
    capacity?: number;
}
export declare class UpdateWorkerChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateWorkerChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateWorkerChannelPathParams;
    request?: UpdateWorkerChannelUpdateWorkerChannelRequest;
    security: UpdateWorkerChannelSecurity;
}
export declare class UpdateWorkerChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceWorkerWorkerChannel?: shared.TaskrouterV1WorkspaceWorkerWorkerChannel;
}
