import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthGetRequestOptions } from "./authgetrequestoptions";


// AuthGetRequest
/** 
 * AuthGetRequest defines the request schema for `/auth/get`
**/
export class AuthGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=options" })
  options?: AuthGetRequestOptions;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
