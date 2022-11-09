import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { CustomerGroup } from "./customergroup";


// UpdateCustomerGroupResponse
/** 
 * Defines the fields that are included in the response body of
 * a request to the [UpdateCustomerGroup](https://developer.squareup.com/reference/square_2021-08-18/customer-groups-api/update-customer-group) endpoint.
 * 
 * Either `errors` or `group` is present in a given response (never both).
**/
export class UpdateCustomerGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=group" })
  group?: CustomerGroup;
}
