import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebhookEnumStatusEnum } from "./webhookenumstatusenum";
import { WebhookEnumVersionEnum } from "./webhookenumversionenum";
import { WebhookEnumMethodsEnum } from "./webhookenummethodsenum";



export class VerifyV2ServiceWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=event_types" })
  eventTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: WebhookEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: WebhookEnumVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=webhook_method" })
  webhookMethod?: WebhookEnumMethodsEnum;

  @SpeakeasyMetadata({ data: "json, name=webhook_url" })
  webhookUrl?: string;
}
