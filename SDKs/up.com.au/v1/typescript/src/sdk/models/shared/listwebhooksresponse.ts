import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebhookResource } from "./webhookresource";



export class ListWebhooksResponseLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next" })
  next: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev: string;
}


// ListWebhooksResponse
/** 
 * Successful response to get all webhooks. This returns a paginated list of
 * webhooks, which can be scrolled by following the `prev` and `next` links
 * if present.
 * 
**/
export class ListWebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: WebhookResource })
  data: WebhookResource[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ListWebhooksResponseLinks;
}
