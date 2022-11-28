import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebhookEventResource } from "./webhookeventresource";



// WebhookEventCallback
/** 
 * Asynchronous callback request used for webhook event delivery.
 * 
**/
export class WebhookEventCallback extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: WebhookEventResource;
}
