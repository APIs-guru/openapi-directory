import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookEnumStatusEnum } from "./webhookenumstatusenum";
import { WebhookEnumVersionEnum } from "./webhookenumversionenum";
import { WebhookEnumMethodsEnum } from "./webhookenummethodsenum";
export declare class VerifyV2ServiceWebhook extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    eventTypes?: string[];
    friendlyName?: string;
    serviceSid?: string;
    sid?: string;
    status?: WebhookEnumStatusEnum;
    url?: string;
    version?: WebhookEnumVersionEnum;
    webhookMethod?: WebhookEnumMethodsEnum;
    webhookUrl?: string;
}
