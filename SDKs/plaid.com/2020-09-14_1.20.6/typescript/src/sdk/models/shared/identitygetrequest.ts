import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityGetRequestOptions } from "./identitygetrequestoptions";



// IdentityGetRequest
/** 
 * IdentityGetRequest defines the request schema for `/identity/get`
**/
export class IdentityGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: IdentityGetRequestOptions;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
