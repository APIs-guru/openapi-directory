import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteMemberServerList: readonly ["https://chat.twilio.com"];
export declare class DeleteMemberPathParams extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
    sid: string;
}
export declare class DeleteMemberHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.MemberEnumWebhookEnabledTypeEnum;
}
export declare class DeleteMemberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteMemberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteMemberPathParams;
    headers: DeleteMemberHeaders;
    security: DeleteMemberSecurity;
}
export declare class DeleteMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
