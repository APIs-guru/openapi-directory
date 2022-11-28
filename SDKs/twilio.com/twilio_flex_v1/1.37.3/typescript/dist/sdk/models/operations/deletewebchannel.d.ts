import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteWebChannelServerList: readonly ["https://flex-api.twilio.com"];
export declare class DeleteWebChannelPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteWebChannelSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteWebChannelRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteWebChannelPathParams;
    security: DeleteWebChannelSecurity;
}
export declare class DeleteWebChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
