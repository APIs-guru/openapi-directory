import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WebhookDeliveryLogResource } from "./webhookdeliverylogresource";


export class ListWebhookDeliveryLogsResponseLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=next" })
  next: string;

  @Metadata({ data: "json, name=prev" })
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
  @Metadata({ data: "json, name=data", elemType: shared.WebhookDeliveryLogResource })
  data: WebhookDeliveryLogResource[];

  @Metadata({ data: "json, name=links" })
  links: ListWebhookDeliveryLogsResponseLinks;
}
