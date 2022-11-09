import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateMobileAuthorizationCodeRequest
/** 
 * Defines the body parameters that can be provided in a request to the
 * __CreateMobileAuthorizationCode__ endpoint.
**/
export class CreateMobileAuthorizationCodeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=location_id" })
  locationId?: string;
}
