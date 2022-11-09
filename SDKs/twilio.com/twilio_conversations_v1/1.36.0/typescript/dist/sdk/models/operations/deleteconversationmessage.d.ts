import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETECONVERSATIONMESSAGE_SERVERS: string[];
export declare class DeleteConversationMessagePathParams extends SpeakeasyBase {
    conversationSid: string;
    sid: string;
}
export declare class DeleteConversationMessageHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ConversationMessageEnumWebhookEnabledTypeEnum;
}
export declare class DeleteConversationMessageSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteConversationMessageRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteConversationMessagePathParams;
    headers: DeleteConversationMessageHeaders;
    security: DeleteConversationMessageSecurity;
}
export declare class DeleteConversationMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
