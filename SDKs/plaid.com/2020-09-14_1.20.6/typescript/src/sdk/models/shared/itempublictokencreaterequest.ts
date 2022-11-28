import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ItemPublicTokenCreateRequest
/** 
 * ItemPublicTokenCreateRequest defines the request schema for `/item/public_token/create`
**/
export class ItemPublicTokenCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
