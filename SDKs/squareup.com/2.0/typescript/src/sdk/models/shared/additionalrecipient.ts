import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// AdditionalRecipient
/** 
 * Represents an additional recipient (other than the merchant) receiving a portion of this tender.
**/
export class AdditionalRecipient extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney: Money;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=location_id" })
  locationId: string;

  @Metadata({ data: "json, name=receivable_id" })
  receivableId?: string;
}
