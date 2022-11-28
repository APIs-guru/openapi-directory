import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WebhookEventTypesEnum {
    MessageReceived = "message-received",
    MessageStatus = "message-status",
    MessageSent = "message-sent",
    ConversationClosed = "conversation-closed",
    ContactCreated = "contact-created",
    ContactUpdated = "contact-updated",
    ContactRemoved = "contact-removed"
}


export class Webhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventTypes" })
  eventTypes?: WebhookEventTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
