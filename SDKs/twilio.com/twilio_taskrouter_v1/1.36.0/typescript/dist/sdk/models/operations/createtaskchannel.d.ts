import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATETASKCHANNEL_SERVERS: string[];
export declare class CreateTaskChannelPathParams extends SpeakeasyBase {
    workspaceSid: string;
}
export declare class CreateTaskChannelCreateTaskChannelRequest extends SpeakeasyBase {
    channelOptimizedRouting?: boolean;
    friendlyName: string;
    uniqueName: string;
}
export declare class CreateTaskChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateTaskChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateTaskChannelPathParams;
    request?: CreateTaskChannelCreateTaskChannelRequest;
    security: CreateTaskChannelSecurity;
}
export declare class CreateTaskChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceTaskChannel?: shared.TaskrouterV1WorkspaceTaskChannel;
}
