import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceWebhookConfigurationEnumMethodEnum } from "./servicewebhookconfigurationenummethodenum";
export declare class ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration extends SpeakeasyBase {
    accountSid?: string;
    chatServiceSid?: string;
    filters?: string[];
    method?: ServiceWebhookConfigurationEnumMethodEnum;
    postWebhookUrl?: string;
    preWebhookUrl?: string;
    url?: string;
}
