import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SyncV1Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=acl_enabled" })
  aclEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=reachability_debouncing_enabled" })
  reachabilityDebouncingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reachability_debouncing_window" })
  reachabilityDebouncingWindow?: number;

  @SpeakeasyMetadata({ data: "json, name=reachability_webhooks_enabled" })
  reachabilityWebhooksEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=webhook_url" })
  webhookUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=webhooks_from_rest_enabled" })
  webhooksFromRestEnabled?: boolean;
}
