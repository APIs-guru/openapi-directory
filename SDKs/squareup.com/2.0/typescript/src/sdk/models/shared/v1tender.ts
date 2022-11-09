import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { V1Money } from "./v1money";
import { V1Money } from "./v1money";
import { V1Money } from "./v1money";
import { V1Money } from "./v1money";


// V1Tender
/** 
 * A tender represents a discrete monetary exchange. Square represents this
 * exchange as a money object with a specific currency and amount, where the
 * amount is given in the smallest denomination of the given currency.
 * 
 * Square POS can accept more than one form of tender for a single payment (such
 * as by splitting a bill between a credit card and a gift card). The `tender`
 * field of the Payment object lists all forms of tender used for the payment.
 * 
 * Split tender payments behave slightly differently from single tender payments:
 * 
 * The receipt_url for a split tender corresponds only to the first tender listed
 * in the tender field. To get the receipt URLs for the remaining tenders, use
 * the receipt_url fields of the corresponding Tender objects.
 * 
 * *A note on gift cards**: when a customer purchases a Square gift card from a
 * merchant, the merchant receives the full amount of the gift card in the
 * associated payment.
 * 
 * When that gift card is used as a tender, the balance of the gift card is
 * reduced and the merchant receives no funds. A `Tender` object with a type of
 * `SQUARE_GIFT_CARD` indicates a gift card was used for some or all of the
 * associated payment.
**/
export class V1Tender extends SpeakeasyBase {
  @Metadata({ data: "json, name=card_brand" })
  cardBrand?: string;

  @Metadata({ data: "json, name=change_back_money" })
  changeBackMoney?: V1Money;

  @Metadata({ data: "json, name=employee_id" })
  employeeId?: string;

  @Metadata({ data: "json, name=entry_method" })
  entryMethod?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_exchange" })
  isExchange?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pan_suffix" })
  panSuffix?: string;

  @Metadata({ data: "json, name=payment_note" })
  paymentNote?: string;

  @Metadata({ data: "json, name=receipt_url" })
  receiptUrl?: string;

  @Metadata({ data: "json, name=refunded_money" })
  refundedMoney?: V1Money;

  @Metadata({ data: "json, name=settled_at" })
  settledAt?: string;

  @Metadata({ data: "json, name=tendered_at" })
  tenderedAt?: string;

  @Metadata({ data: "json, name=tendered_money" })
  tenderedMoney?: V1Money;

  @Metadata({ data: "json, name=total_money" })
  totalMoney?: V1Money;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
