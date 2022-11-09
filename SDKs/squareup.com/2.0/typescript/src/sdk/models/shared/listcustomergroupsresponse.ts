import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { CustomerGroup } from "./customergroup";


// ListCustomerGroupsResponse
/** 
 * Defines the fields that are included in the response body of
 * a request to the [ListCustomerGroups](https://developer.squareup.com/reference/square_2021-08-18/customer-groups-api/list-customer-groups) endpoint.
 * 
 * Either `errors` or `groups` is present in a given response (never both).
**/
export class ListCustomerGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=groups", elemType: shared.CustomerGroup })
  groups?: CustomerGroup[];
}
