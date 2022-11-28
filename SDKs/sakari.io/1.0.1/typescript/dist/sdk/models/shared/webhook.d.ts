import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WebhookEventTypesEnum {
    MessageReceived = "message-received",
    MessageStatus = "message-status",
    MessageSent = "message-sent",
    ConversationClosed = "conversation-closed",
    ContactCreated = "contact-created",
    ContactUpdated = "contact-updated",
    ContactRemoved = "contact-removed"
}
export declare class Webhook extends SpeakeasyBase {
    eventTypes?: WebhookEventTypesEnum[];
    url?: string;
}
