import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteServiceUserServerList: readonly ["https://conversations.twilio.com"];
export declare class DeleteServiceUserPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    sid: string;
}
export declare class DeleteServiceUserHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ServiceUserEnumWebhookEnabledTypeEnum;
}
export declare class DeleteServiceUserSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteServiceUserRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteServiceUserPathParams;
    headers: DeleteServiceUserHeaders;
    security: DeleteServiceUserSecurity;
}
export declare class DeleteServiceUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
