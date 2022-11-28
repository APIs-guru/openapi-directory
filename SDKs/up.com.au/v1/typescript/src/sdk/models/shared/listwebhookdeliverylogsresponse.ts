import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebhookDeliveryLogResource } from "./webhookdeliverylogresource";



export class ListWebhookDeliveryLogsResponseLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next" })
  next: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev: string;
}


// ListWebhookDeliveryLogsResponse
/** 
 * Successful response to get all delivery logs for a webhook. This returns
 * a paginated list of delivery logs, which can be scrolled by following the
 * `next` and `prev` links if present.
 * 
**/
export class ListWebhookDeliveryLogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: WebhookDeliveryLogResource })
  data: WebhookDeliveryLogResource[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ListWebhookDeliveryLogsResponseLinks;
}
