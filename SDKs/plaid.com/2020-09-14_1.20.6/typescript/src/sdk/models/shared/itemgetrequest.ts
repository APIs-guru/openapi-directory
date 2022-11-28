import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ItemGetRequest
/** 
 * ItemGetRequest defines the request schema for `/item/get`
**/
export class ItemGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
