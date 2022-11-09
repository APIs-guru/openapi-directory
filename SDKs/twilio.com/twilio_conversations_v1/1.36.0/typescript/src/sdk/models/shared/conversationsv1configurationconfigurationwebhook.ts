import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationWebhookEnumMethodEnum } from "./configurationwebhookenummethodenum";
import { ConfigurationWebhookEnumTargetEnum } from "./configurationwebhookenumtargetenum";


export class ConversationsV1ConfigurationConfigurationWebhook extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=filters" })
  filters?: string[];

  @Metadata({ data: "json, name=method" })
  method?: ConfigurationWebhookEnumMethodEnum;

  @Metadata({ data: "json, name=post_webhook_url" })
  postWebhookUrl?: string;

  @Metadata({ data: "json, name=pre_webhook_url" })
  preWebhookUrl?: string;

  @Metadata({ data: "json, name=target" })
  target?: ConfigurationWebhookEnumTargetEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
