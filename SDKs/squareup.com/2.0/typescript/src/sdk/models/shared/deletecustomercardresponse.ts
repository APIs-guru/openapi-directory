import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";


// DeleteCustomerCardResponse
/** 
 * Defines the fields that are included in the response body of
 * a request to the `DeleteCustomerCard` endpoint.
**/
export class DeleteCustomerCardResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
