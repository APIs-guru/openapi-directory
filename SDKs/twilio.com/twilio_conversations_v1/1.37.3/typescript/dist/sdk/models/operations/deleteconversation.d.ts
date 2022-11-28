import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class DeleteConversationPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteConversationHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ConversationEnumWebhookEnabledTypeEnum;
}
export declare class DeleteConversationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteConversationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteConversationPathParams;
    headers: DeleteConversationHeaders;
    security: DeleteConversationSecurity;
}
export declare class DeleteConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
