import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Error } from "./error";


// CreateMobileAuthorizationCodeResponse
/** 
 * Defines the fields that are included in the response body of
 * a request to the __CreateMobileAuthorizationCode__ endpoint.
**/
export class CreateMobileAuthorizationCodeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorization_code" })
  authorizationCode?: string;

  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=expires_at" })
  expiresAt?: string;
}
