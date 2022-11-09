import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WebhookResponse } from "./webhookresponse";


// WebhooksResponse
/** 
 * List Webhooks Object
**/
export class WebhooksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.WebhookResponse })
  content?: WebhookResponse[];

  @Metadata({ data: "json, name=links" })
  links?: any[];

  @Metadata({ data: "json, name=page" })
  page?: any;
}
