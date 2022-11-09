import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Card } from "./card";
import { Error } from "./error";


// CreateCustomerCardResponse
/** 
 * Defines the fields that are included in the response body of
 * a request to the `CreateCustomerCard` endpoint.
 * 
 * Either `errors` or `card` is present in a given response (never both).
**/
export class CreateCustomerCardResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=card" })
  card?: Card;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
