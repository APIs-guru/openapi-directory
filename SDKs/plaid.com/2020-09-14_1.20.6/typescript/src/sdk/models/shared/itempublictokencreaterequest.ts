import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ItemPublicTokenCreateRequest
/** 
 * ItemPublicTokenCreateRequest defines the request schema for `/item/public_token/create`
**/
export class ItemPublicTokenCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
