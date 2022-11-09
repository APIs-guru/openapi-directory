import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Location } from "./location";


// RetrieveLocationResponse
/** 
 * Defines the fields that the
 * [RetrieveLocation](https://developer.squareup.com/reference/square_2021-08-18/locations-api/retrieve-location) endpoint returns
 * in a response.
**/
export class RetrieveLocationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=location" })
  location?: Location;
}
