import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Location } from "./location";


// ListLocationsResponse
/** 
 * Defines the fields that are included in the response body of
 * a request to the __ListLocations__ endpoint.
 * 
 * One of `errors` or `locations` is present in a given response (never both).
**/
export class ListLocationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=locations", elemType: shared.Location })
  locations?: Location[];
}
