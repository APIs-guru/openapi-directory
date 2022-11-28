import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ItemWebhookUpdateRequest
/** 
 * ItemWebhookUpdateRequest defines the request schema for `/item/webhook/update`
**/
export class ItemWebhookUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook: string;
}
