import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ItemAccessTokenInvalidateRequest
/** 
 * ItemAccessTokenInvalidateRequest defines the request schema for `/item/access_token/invalidate`
**/
export class ItemAccessTokenInvalidateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
