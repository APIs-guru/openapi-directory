import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Card } from "./card";
import { Error } from "./error";


// ListCardsResponse
/** 
 * Defines the fields that are included in the response body of
 * a request to the [ListCards](#endpoint-cards-listcards) endpoint.
 * 
 * Note: if there are errors processing the request, the card field will not be
 * present.
**/
export class ListCardsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cards", elemType: shared.Card })
  cards?: Card[];

  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
