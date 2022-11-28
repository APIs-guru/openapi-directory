import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ItemRemoveRequest
/** 
 * ItemRemoveRequest defines the request schema for `/item/remove`
**/
export class ItemRemoveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
