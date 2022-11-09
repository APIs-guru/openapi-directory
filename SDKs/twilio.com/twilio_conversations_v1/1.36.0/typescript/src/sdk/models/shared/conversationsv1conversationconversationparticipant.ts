import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConversationsV1ConversationConversationParticipant extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=attributes" })
  attributes?: string;

  @Metadata({ data: "json, name=conversation_sid" })
  conversationSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=identity" })
  identity?: string;

  @Metadata({ data: "json, name=last_read_message_index" })
  lastReadMessageIndex?: number;

  @Metadata({ data: "json, name=last_read_timestamp" })
  lastReadTimestamp?: string;

  @Metadata({ data: "json, name=messaging_binding" })
  messagingBinding?: any;

  @Metadata({ data: "json, name=role_sid" })
  roleSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
