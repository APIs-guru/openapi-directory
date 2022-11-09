import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigurationWebhookEnumMethodEnum } from "./configurationwebhookenummethodenum";
import { ConfigurationWebhookEnumTargetEnum } from "./configurationwebhookenumtargetenum";
export declare class ConversationsV1ConfigurationConfigurationWebhook extends SpeakeasyBase {
    accountSid?: string;
    filters?: string[];
    method?: ConfigurationWebhookEnumMethodEnum;
    postWebhookUrl?: string;
    preWebhookUrl?: string;
    target?: ConfigurationWebhookEnumTargetEnum;
    url?: string;
}
