import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Location } from "./location";


// UpdateLocationRequest
/** 
 * Request object for the [UpdateLocation](https://developer.squareup.com/reference/square_2021-08-18/locations-api/update-location) endpoint.
**/
export class UpdateLocationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: Location;
}
