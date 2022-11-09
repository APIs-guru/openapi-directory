import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LinkTokenGetRequest
/** 
 * LinkTokenGetRequest defines the request schema for `/link/token/get`
**/
export class LinkTokenGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=link_token" })
  linkToken: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
