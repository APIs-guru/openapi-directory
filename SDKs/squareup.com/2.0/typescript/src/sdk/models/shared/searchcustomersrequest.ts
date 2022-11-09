import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerQuery } from "./customerquery";


// SearchCustomersRequest
/** 
 * Defines the fields that are included in the request body of a request to the
 * `SearchCustomers` endpoint.
**/
export class SearchCustomersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=query" })
  query?: CustomerQuery;
}
