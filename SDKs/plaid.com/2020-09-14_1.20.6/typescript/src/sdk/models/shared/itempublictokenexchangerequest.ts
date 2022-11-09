import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ItemPublicTokenExchangeRequest
/** 
 * ItemPublicTokenExchangeRequest defines the request schema for `/item/public_token/exchange`
**/
export class ItemPublicTokenExchangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=public_token" })
  publicToken: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
