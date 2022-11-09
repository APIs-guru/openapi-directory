import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// GiftCardActivityActivate
/** 
 * Describes a gift card activity of the ACTIVATE type.
**/
export class GiftCardActivityActivate extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney?: Money;

  @Metadata({ data: "json, name=buyer_payment_instrument_ids" })
  buyerPaymentInstrumentIds?: string[];

  @Metadata({ data: "json, name=line_item_uid" })
  lineItemUid?: string;

  @Metadata({ data: "json, name=order_id" })
  orderId?: string;

  @Metadata({ data: "json, name=reference_id" })
  referenceId?: string;
}
