import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteConversationScopedWebhookServerList: readonly ["https://conversations.twilio.com"];
export declare class DeleteConversationScopedWebhookPathParams extends SpeakeasyBase {
    conversationSid: string;
    sid: string;
}
export declare class DeleteConversationScopedWebhookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteConversationScopedWebhookRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteConversationScopedWebhookPathParams;
    security: DeleteConversationScopedWebhookSecurity;
}
export declare class DeleteConversationScopedWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
