import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IpMessagingV1Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=consumption_report_interval" })
  consumptionReportInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=default_channel_creator_role_sid" })
  defaultChannelCreatorRoleSid?: string;

  @SpeakeasyMetadata({ data: "json, name=default_channel_role_sid" })
  defaultChannelRoleSid?: string;

  @SpeakeasyMetadata({ data: "json, name=default_service_role_sid" })
  defaultServiceRoleSid?: string;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=limits" })
  limits?: any;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=notifications" })
  notifications?: any;

  @SpeakeasyMetadata({ data: "json, name=post_webhook_url" })
  postWebhookUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=pre_webhook_url" })
  preWebhookUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=reachability_enabled" })
  reachabilityEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=read_status_enabled" })
  readStatusEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=typing_indicator_timeout" })
  typingIndicatorTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=webhook_filters" })
  webhookFilters?: string[];

  @SpeakeasyMetadata({ data: "json, name=webhook_method" })
  webhookMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=webhooks" })
  webhooks?: any;
}
