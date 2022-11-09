import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WebhookResource } from "./webhookresource";


export class ListWebhooksResponseLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=next" })
  next: string;

  @Metadata({ data: "json, name=prev" })
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
  @Metadata({ data: "json, name=data", elemType: shared.WebhookResource })
  data: WebhookResource[];

  @Metadata({ data: "json, name=links" })
  links: ListWebhooksResponseLinks;
}
