import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConversationsV1Configuration extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=default_chat_service_sid" })
  defaultChatServiceSid?: string;

  @Metadata({ data: "json, name=default_closed_timer" })
  defaultClosedTimer?: string;

  @Metadata({ data: "json, name=default_inactive_timer" })
  defaultInactiveTimer?: string;

  @Metadata({ data: "json, name=default_messaging_service_sid" })
  defaultMessagingServiceSid?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
