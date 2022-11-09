import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { V1PaymentTax } from "./v1paymenttax";
import { V1Money } from "./v1money";
import { Device } from "./device";
import { V1Money } from "./v1money";
import { V1Money } from "./v1money";
import { V1PaymentTax } from "./v1paymenttax";
import { V1Money } from "./v1money";
import { V1PaymentItemization } from "./v1paymentitemization";
import { V1Money } from "./v1money";
import { V1Money } from "./v1money";
import { V1Money } from "./v1money";
import { V1Money } from "./v1money";
import { V1Refund } from "./v1refund";
import { V1Money } from "./v1money";
import { V1PaymentSurcharge } from "./v1paymentsurcharge";
import { V1Money } from "./v1money";
import { V1Money } from "./v1money";
import { V1Tender } from "./v1tender";
import { V1Money } from "./v1money";
import { V1Money } from "./v1money";


// V1Payment
/** 
 * A payment represents a paid transaction between a Square merchant and a
 * customer. Payment details are usually available from Connect API endpoints
 * within a few minutes after the transaction completes.
 * 
 * Each Payment object includes several fields that end in `_money`. These fields
 * describe the various amounts of money that contribute to the payment total:
 * 
 * <ul>
 * <li>
 * Monetary values are <b>positive</b> if they represent an
 * <em>increase</em> in the amount of money the merchant receives (e.g.,
 * <code>tax_money</code>, <code>tip_money</code>).
 * </li>
 * <li>
 * Monetary values are <b>negative</b> if they represent an
 * <em>decrease</em> in the amount of money the merchant receives (e.g.,
 * <code>discount_money</code>, <code>refunded_money</code>).
 * </li>
 * </ul>
**/
export class V1Payment extends SpeakeasyBase {
  @Metadata({ data: "json, name=additive_tax", elemType: shared.V1PaymentTax })
  additiveTax?: V1PaymentTax[];

  @Metadata({ data: "json, name=additive_tax_money" })
  additiveTaxMoney?: V1Money;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=creator_id" })
  creatorId?: string;

  @Metadata({ data: "json, name=device" })
  device?: Device;

  @Metadata({ data: "json, name=discount_money" })
  discountMoney?: V1Money;

  @Metadata({ data: "json, name=gross_sales_money" })
  grossSalesMoney?: V1Money;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=inclusive_tax", elemType: shared.V1PaymentTax })
  inclusiveTax?: V1PaymentTax[];

  @Metadata({ data: "json, name=inclusive_tax_money" })
  inclusiveTaxMoney?: V1Money;

  @Metadata({ data: "json, name=is_partial" })
  isPartial?: boolean;

  @Metadata({ data: "json, name=itemizations", elemType: shared.V1PaymentItemization })
  itemizations?: V1PaymentItemization[];

  @Metadata({ data: "json, name=merchant_id" })
  merchantId?: string;

  @Metadata({ data: "json, name=net_sales_money" })
  netSalesMoney?: V1Money;

  @Metadata({ data: "json, name=net_total_money" })
  netTotalMoney?: V1Money;

  @Metadata({ data: "json, name=payment_url" })
  paymentUrl?: string;

  @Metadata({ data: "json, name=processing_fee_money" })
  processingFeeMoney?: V1Money;

  @Metadata({ data: "json, name=receipt_url" })
  receiptUrl?: string;

  @Metadata({ data: "json, name=refunded_money" })
  refundedMoney?: V1Money;

  @Metadata({ data: "json, name=refunds", elemType: shared.V1Refund })
  refunds?: V1Refund[];

  @Metadata({ data: "json, name=surcharge_money" })
  surchargeMoney?: V1Money;

  @Metadata({ data: "json, name=surcharges", elemType: shared.V1PaymentSurcharge })
  surcharges?: V1PaymentSurcharge[];

  @Metadata({ data: "json, name=swedish_rounding_money" })
  swedishRoundingMoney?: V1Money;

  @Metadata({ data: "json, name=tax_money" })
  taxMoney?: V1Money;

  @Metadata({ data: "json, name=tender", elemType: shared.V1Tender })
  tender?: V1Tender[];

  @Metadata({ data: "json, name=tip_money" })
  tipMoney?: V1Money;

  @Metadata({ data: "json, name=total_collected_money" })
  totalCollectedMoney?: V1Money;
}
