import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// GiftCardActivityImport
/** 
 * Describes a gift card activity of the IMPORT type and the `GiftCardGANSource` is OTHER 
 * (a third-party gift card).
**/
export class GiftCardActivityImport extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney: Money;
}
