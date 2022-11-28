import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateTaskChannelServerList: readonly ["https://taskrouter.twilio.com"];
export declare class UpdateTaskChannelPathParams extends SpeakeasyBase {
    sid: string;
    workspaceSid: string;
}
export declare class UpdateTaskChannelUpdateTaskChannelRequest extends SpeakeasyBase {
    channelOptimizedRouting?: boolean;
    friendlyName?: string;
}
export declare class UpdateTaskChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateTaskChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateTaskChannelPathParams;
    request?: UpdateTaskChannelUpdateTaskChannelRequest;
    security: UpdateTaskChannelSecurity;
}
export declare class UpdateTaskChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceTaskChannel?: shared.TaskrouterV1WorkspaceTaskChannel;
}
