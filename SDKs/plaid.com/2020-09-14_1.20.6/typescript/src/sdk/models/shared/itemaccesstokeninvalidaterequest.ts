import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ItemAccessTokenInvalidateRequest
/** 
 * ItemAccessTokenInvalidateRequest defines the request schema for `/item/access_token/invalidate`
**/
export class ItemAccessTokenInvalidateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
