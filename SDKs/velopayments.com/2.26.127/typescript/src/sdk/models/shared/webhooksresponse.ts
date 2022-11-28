import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebhookResponse } from "./webhookresponse";



// WebhooksResponse
/** 
 * List Webhooks Object
**/
export class WebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: WebhookResponse })
  content?: WebhookResponse[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: any[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: any;
}
