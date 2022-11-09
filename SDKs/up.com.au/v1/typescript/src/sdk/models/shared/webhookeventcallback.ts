import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WebhookEventResource } from "./webhookeventresource";


// WebhookEventCallback
/** 
 * Asynchronous callback request used for webhook event delivery.
 * 
**/
export class WebhookEventCallback extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: WebhookEventResource;
}
