import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteTaskChannelServerList: readonly ["https://taskrouter.twilio.com"];
export declare class DeleteTaskChannelPathParams extends SpeakeasyBase {
    sid: string;
    workspaceSid: string;
}
export declare class DeleteTaskChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteTaskChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteTaskChannelPathParams;
    security: DeleteTaskChannelSecurity;
}
export declare class DeleteTaskChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
