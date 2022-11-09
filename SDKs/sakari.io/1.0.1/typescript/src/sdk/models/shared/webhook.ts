import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WebhookEventTypesEnum {
    MessageReceived = "message-received"
,    MessageStatus = "message-status"
,    MessageSent = "message-sent"
,    ConversationClosed = "conversation-closed"
,    ContactCreated = "contact-created"
,    ContactUpdated = "contact-updated"
,    ContactRemoved = "contact-removed"
}


export class Webhook extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventTypes" })
  eventTypes?: WebhookEventTypesEnum[];

  @Metadata({ data: "json, name=url" })
  url?: string;
}
