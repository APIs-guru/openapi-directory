import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { V1PaymentTax } from "./v1paymenttax";
import { V1Money } from "./v1money";
import { V1Money } from "./v1money";
import { V1PaymentTax } from "./v1paymenttax";
import { V1Money } from "./v1money";
import { V1Money } from "./v1money";
import { V1Money } from "./v1money";
import { V1Money } from "./v1money";
import { V1PaymentSurcharge } from "./v1paymentsurcharge";
import { V1Money } from "./v1money";
import { V1Money } from "./v1money";


// V1Refund
/** 
 * V1Refund
**/
export class V1Refund extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=is_exchange" })
  isExchange?: boolean;

  @Metadata({ data: "json, name=merchant_id" })
  merchantId?: string;

  @Metadata({ data: "json, name=payment_id" })
  paymentId?: string;

  @Metadata({ data: "json, name=processed_at" })
  processedAt?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=refunded_additive_tax", elemType: shared.V1PaymentTax })
  refundedAdditiveTax?: V1PaymentTax[];

  @Metadata({ data: "json, name=refunded_additive_tax_money" })
  refundedAdditiveTaxMoney?: V1Money;

  @Metadata({ data: "json, name=refunded_discount_money" })
  refundedDiscountMoney?: V1Money;

  @Metadata({ data: "json, name=refunded_inclusive_tax", elemType: shared.V1PaymentTax })
  refundedInclusiveTax?: V1PaymentTax[];

  @Metadata({ data: "json, name=refunded_inclusive_tax_money" })
  refundedInclusiveTaxMoney?: V1Money;

  @Metadata({ data: "json, name=refunded_money" })
  refundedMoney?: V1Money;

  @Metadata({ data: "json, name=refunded_processing_fee_money" })
  refundedProcessingFeeMoney?: V1Money;

  @Metadata({ data: "json, name=refunded_surcharge_money" })
  refundedSurchargeMoney?: V1Money;

  @Metadata({ data: "json, name=refunded_surcharges", elemType: shared.V1PaymentSurcharge })
  refundedSurcharges?: V1PaymentSurcharge[];

  @Metadata({ data: "json, name=refunded_tax_money" })
  refundedTaxMoney?: V1Money;

  @Metadata({ data: "json, name=refunded_tip_money" })
  refundedTipMoney?: V1Money;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
