import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConversationsV1Configuration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=default_chat_service_sid" })
  defaultChatServiceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=default_closed_timer" })
  defaultClosedTimer?: string;

  @SpeakeasyMetadata({ data: "json, name=default_inactive_timer" })
  defaultInactiveTimer?: string;

  @SpeakeasyMetadata({ data: "json, name=default_messaging_service_sid" })
  defaultMessagingServiceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
