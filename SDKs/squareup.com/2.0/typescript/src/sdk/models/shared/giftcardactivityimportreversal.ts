import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// GiftCardActivityImportReversal
/** 
 * Present only when GiftCardActivityType is IMPORT_REVERSAL and GiftCardGANSource is OTHER
**/
export class GiftCardActivityImportReversal extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney: Money;
}
