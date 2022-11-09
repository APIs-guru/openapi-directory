import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WebhookResource } from "./webhookresource";


// GetWebhookResponse
/** 
 * Successful response to get a single webhook.
 * 
**/
export class GetWebhookResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: WebhookResource;
}
