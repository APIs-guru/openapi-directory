import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WebhookEnumStatusEnum } from "./webhookenumstatusenum";
import { WebhookEnumVersionEnum } from "./webhookenumversionenum";
import { WebhookEnumMethodsEnum } from "./webhookenummethodsenum";


export class VerifyV2ServiceWebhook extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=event_types" })
  eventTypes?: string[];

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: WebhookEnumStatusEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=version" })
  version?: WebhookEnumVersionEnum;

  @Metadata({ data: "json, name=webhook_method" })
  webhookMethod?: WebhookEnumMethodsEnum;

  @Metadata({ data: "json, name=webhook_url" })
  webhookUrl?: string;
}
