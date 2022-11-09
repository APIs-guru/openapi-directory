import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceWebhookConfigurationEnumMethodEnum } from "./servicewebhookconfigurationenummethodenum";


export class ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=chat_service_sid" })
  chatServiceSid?: string;

  @Metadata({ data: "json, name=filters" })
  filters?: string[];

  @Metadata({ data: "json, name=method" })
  method?: ServiceWebhookConfigurationEnumMethodEnum;

  @Metadata({ data: "json, name=post_webhook_url" })
  postWebhookUrl?: string;

  @Metadata({ data: "json, name=pre_webhook_url" })
  preWebhookUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
