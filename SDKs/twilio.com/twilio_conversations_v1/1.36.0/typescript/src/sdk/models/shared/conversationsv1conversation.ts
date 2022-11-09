import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConversationEnumStateEnum } from "./conversationenumstateenum";


export class ConversationsV1Conversation extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=attributes" })
  attributes?: string;

  @Metadata({ data: "json, name=bindings" })
  bindings?: any;

  @Metadata({ data: "json, name=chat_service_sid" })
  chatServiceSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=messaging_service_sid" })
  messagingServiceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=state" })
  state?: ConversationEnumStateEnum;

  @Metadata({ data: "json, name=timers" })
  timers?: any;

  @Metadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
