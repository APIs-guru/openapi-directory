import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceWebhookConfigurationEnumMethodEnum } from "./servicewebhookconfigurationenummethodenum";



export class ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=chat_service_sid" })
  chatServiceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: string[];

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: ServiceWebhookConfigurationEnumMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=post_webhook_url" })
  postWebhookUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=pre_webhook_url" })
  preWebhookUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
