import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Customer } from "./customer";
import { Error } from "./error";


// SearchCustomersResponse
/** 
 * Defines the fields that are included in the response body of
 * a request to the `SearchCustomers` endpoint.
 * 
 * Either `errors` or `customers` is present in a given response (never both).
**/
export class SearchCustomersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=customers", elemType: shared.Customer })
  customers?: Customer[];

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
