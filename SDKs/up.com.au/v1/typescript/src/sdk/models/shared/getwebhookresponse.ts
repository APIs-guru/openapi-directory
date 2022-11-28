import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebhookResource } from "./webhookresource";



// GetWebhookResponse
/** 
 * Successful response to get a single webhook.
 * 
**/
export class GetWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: WebhookResource;
}
