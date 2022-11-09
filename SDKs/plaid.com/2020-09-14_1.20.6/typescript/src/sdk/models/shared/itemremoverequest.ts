import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ItemRemoveRequest
/** 
 * ItemRemoveRequest defines the request schema for `/item/remove`
**/
export class ItemRemoveRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
