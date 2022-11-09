import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Card } from "./card";
import { Error } from "./error";


// DisableCardResponse
/** 
 * Defines the fields that are included in the response body of
 * a request to the [DisableCard](#endpoint-cards-disablecard) endpoint.
 * 
 * Note: if there are errors processing the request, the card field will not be
 * present.
**/
export class DisableCardResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=card" })
  card?: Card;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
