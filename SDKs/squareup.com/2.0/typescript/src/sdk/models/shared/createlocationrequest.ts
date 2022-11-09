import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Location } from "./location";


// CreateLocationRequest
/** 
 * Request object for the [CreateLocation](https://developer.squareup.com/reference/square_2021-08-18/locations-api/create-location) endpoint.
**/
export class CreateLocationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: Location;
}
