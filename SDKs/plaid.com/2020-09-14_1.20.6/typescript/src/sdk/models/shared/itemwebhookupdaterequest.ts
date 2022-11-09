import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ItemWebhookUpdateRequest
/** 
 * ItemWebhookUpdateRequest defines the request schema for `/item/webhook/update`
**/
export class ItemWebhookUpdateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=webhook" })
  webhook: string;
}
