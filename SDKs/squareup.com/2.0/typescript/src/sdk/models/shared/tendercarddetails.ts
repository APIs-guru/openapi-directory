import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Card } from "./card";


// TenderCardDetails
/** 
 * Represents additional details of a tender with `type` `CARD` or `SQUARE_GIFT_CARD`
**/
export class TenderCardDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=card" })
  card?: Card;

  @Metadata({ data: "json, name=entry_method" })
  entryMethod?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
