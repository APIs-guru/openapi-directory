import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IpMessagingV1Service extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=consumption_report_interval" })
  consumptionReportInterval?: number;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=default_channel_creator_role_sid" })
  defaultChannelCreatorRoleSid?: string;

  @Metadata({ data: "json, name=default_channel_role_sid" })
  defaultChannelRoleSid?: string;

  @Metadata({ data: "json, name=default_service_role_sid" })
  defaultServiceRoleSid?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=limits" })
  limits?: any;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=notifications" })
  notifications?: any;

  @Metadata({ data: "json, name=post_webhook_url" })
  postWebhookUrl?: string;

  @Metadata({ data: "json, name=pre_webhook_url" })
  preWebhookUrl?: string;

  @Metadata({ data: "json, name=reachability_enabled" })
  reachabilityEnabled?: boolean;

  @Metadata({ data: "json, name=read_status_enabled" })
  readStatusEnabled?: boolean;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=typing_indicator_timeout" })
  typingIndicatorTimeout?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=webhook_filters" })
  webhookFilters?: string[];

  @Metadata({ data: "json, name=webhook_method" })
  webhookMethod?: string;

  @Metadata({ data: "json, name=webhooks" })
  webhooks?: any;
}
