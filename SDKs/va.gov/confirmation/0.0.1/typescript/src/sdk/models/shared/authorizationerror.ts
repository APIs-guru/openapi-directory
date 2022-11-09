import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuthorizationError
/** 
 * API Platform authorization (API token) error
**/
export class AuthorizationError extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}
