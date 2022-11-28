import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteServiceConversationScopedWebhookServerList: readonly ["https://conversations.twilio.com"];
export declare class DeleteServiceConversationScopedWebhookPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    conversationSid: string;
    sid: string;
}
export declare class DeleteServiceConversationScopedWebhookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteServiceConversationScopedWebhookRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteServiceConversationScopedWebhookPathParams;
    security: DeleteServiceConversationScopedWebhookSecurity;
}
export declare class DeleteServiceConversationScopedWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
