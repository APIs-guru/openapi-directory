import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LinkTokenGetRequest
/** 
 * LinkTokenGetRequest defines the request schema for `/link/token/get`
**/
export class LinkTokenGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=link_token" })
  linkToken: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
