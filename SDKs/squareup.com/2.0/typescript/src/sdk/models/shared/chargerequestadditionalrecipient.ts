import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// ChargeRequestAdditionalRecipient
/** 
 * Represents an additional recipient (other than the merchant) entitled to a portion of the tender.
 * Support is currently limited to USD, CAD and GBP currencies
**/
export class ChargeRequestAdditionalRecipient extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney: Money;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=location_id" })
  locationId: string;
}
