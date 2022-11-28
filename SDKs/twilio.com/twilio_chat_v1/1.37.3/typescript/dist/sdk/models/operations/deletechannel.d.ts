import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteChannelServerList: readonly ["https://chat.twilio.com"];
export declare class DeleteChannelPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteChannelPathParams;
    security: DeleteChannelSecurity;
}
export declare class DeleteChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
