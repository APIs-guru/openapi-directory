import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ItemPublicTokenExchangeRequest
/** 
 * ItemPublicTokenExchangeRequest defines the request schema for `/item/public_token/exchange`
**/
export class ItemPublicTokenExchangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=public_token" })
  publicToken: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
