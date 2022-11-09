import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SyncV1Service extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=acl_enabled" })
  aclEnabled?: boolean;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=reachability_debouncing_enabled" })
  reachabilityDebouncingEnabled?: boolean;

  @Metadata({ data: "json, name=reachability_debouncing_window" })
  reachabilityDebouncingWindow?: number;

  @Metadata({ data: "json, name=reachability_webhooks_enabled" })
  reachabilityWebhooksEnabled?: boolean;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=webhook_url" })
  webhookUrl?: string;

  @Metadata({ data: "json, name=webhooks_from_rest_enabled" })
  webhooksFromRestEnabled?: boolean;
}
