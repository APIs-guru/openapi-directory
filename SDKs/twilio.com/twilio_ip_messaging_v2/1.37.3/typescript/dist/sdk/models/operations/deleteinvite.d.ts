import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteInviteServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class DeleteInvitePathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
    sid: string;
}
export declare class DeleteInviteSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteInviteRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteInvitePathParams;
    security: DeleteInviteSecurity;
}
export declare class DeleteInviteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
