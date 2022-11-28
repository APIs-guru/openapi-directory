import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthorizationError
/** 
 * API Platform authorization (API token) error
**/
export class AuthorizationError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
