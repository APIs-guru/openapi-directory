import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// ProcessingFee
/** 
 * Represents the Square processing fee.
**/
export class ProcessingFee extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney?: Money;

  @Metadata({ data: "json, name=effective_at" })
  effectiveAt?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
