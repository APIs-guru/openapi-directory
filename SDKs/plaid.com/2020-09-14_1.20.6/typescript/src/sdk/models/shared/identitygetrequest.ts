import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IdentityGetRequestOptions } from "./identitygetrequestoptions";


// IdentityGetRequest
/** 
 * IdentityGetRequest defines the request schema for `/identity/get`
**/
export class IdentityGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=options" })
  options?: IdentityGetRequestOptions;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
