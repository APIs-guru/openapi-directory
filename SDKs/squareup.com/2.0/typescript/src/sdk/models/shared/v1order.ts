import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { V1OrderHistoryEntry } from "./v1orderhistoryentry";
import { Address } from "./address";
import { V1Money } from "./v1money";
import { V1Tender } from "./v1tender";
import { V1Money } from "./v1money";
import { V1Money } from "./v1money";
import { V1Money } from "./v1money";
import { V1Money } from "./v1money";


// V1Order
/** 
 * V1Order
**/
export class V1Order extends SpeakeasyBase {
  @Metadata({ data: "json, name=btc_price_satoshi" })
  btcPriceSatoshi?: number;

  @Metadata({ data: "json, name=btc_receive_address" })
  btcReceiveAddress?: string;

  @Metadata({ data: "json, name=buyer_email" })
  buyerEmail?: string;

  @Metadata({ data: "json, name=buyer_note" })
  buyerNote?: string;

  @Metadata({ data: "json, name=canceled_note" })
  canceledNote?: string;

  @Metadata({ data: "json, name=completed_note" })
  completedNote?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=expires_at" })
  expiresAt?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=order_history", elemType: shared.V1OrderHistoryEntry })
  orderHistory?: V1OrderHistoryEntry[];

  @Metadata({ data: "json, name=payment_id" })
  paymentId?: string;

  @Metadata({ data: "json, name=promo_code" })
  promoCode?: string;

  @Metadata({ data: "json, name=recipient_name" })
  recipientName?: string;

  @Metadata({ data: "json, name=recipient_phone_number" })
  recipientPhoneNumber?: string;

  @Metadata({ data: "json, name=refunded_note" })
  refundedNote?: string;

  @Metadata({ data: "json, name=shipping_address" })
  shippingAddress?: Address;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=subtotal_money" })
  subtotalMoney?: V1Money;

  @Metadata({ data: "json, name=tender" })
  tender?: V1Tender;

  @Metadata({ data: "json, name=total_discount_money" })
  totalDiscountMoney?: V1Money;

  @Metadata({ data: "json, name=total_price_money" })
  totalPriceMoney?: V1Money;

  @Metadata({ data: "json, name=total_shipping_money" })
  totalShippingMoney?: V1Money;

  @Metadata({ data: "json, name=total_tax_money" })
  totalTaxMoney?: V1Money;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
