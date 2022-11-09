import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ItemGetRequest
/** 
 * ItemGetRequest defines the request schema for `/item/get`
**/
export class ItemGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
