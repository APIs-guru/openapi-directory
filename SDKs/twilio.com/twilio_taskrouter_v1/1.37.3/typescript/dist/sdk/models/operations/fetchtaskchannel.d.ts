import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchTaskChannelServerList: readonly ["https://taskrouter.twilio.com"];
export declare class FetchTaskChannelPathParams extends SpeakeasyBase {
    sid: string;
    workspaceSid: string;
}
export declare class FetchTaskChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchTaskChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchTaskChannelPathParams;
    security: FetchTaskChannelSecurity;
}
export declare class FetchTaskChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    taskrouterV1WorkspaceTaskChannel?: shared.TaskrouterV1WorkspaceTaskChannel;
}
