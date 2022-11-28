import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationWebhookEnumMethodEnum } from "./configurationwebhookenummethodenum";
import { ConfigurationWebhookEnumTargetEnum } from "./configurationwebhookenumtargetenum";



export class ConversationsV1ConfigurationConfigurationWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: string[];

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: ConfigurationWebhookEnumMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=post_webhook_url" })
  postWebhookUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=pre_webhook_url" })
  preWebhookUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: ConfigurationWebhookEnumTargetEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
