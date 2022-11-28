import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthGetRequestOptions } from "./authgetrequestoptions";



// AuthGetRequest
/** 
 * AuthGetRequest defines the request schema for `/auth/get`
**/
export class AuthGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: AuthGetRequestOptions;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
