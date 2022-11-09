import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Money } from "./money";
import { Money } from "./money";
import { ProcessingFee } from "./processingfee";


// PaymentRefund
/** 
 * Represents a refund of a payment made using Square. Contains information about
 * the original payment and the amount of money refunded.
**/
export class PaymentRefund extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney: Money;

  @Metadata({ data: "json, name=app_fee_money" })
  appFeeMoney?: Money;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=order_id" })
  orderId?: string;

  @Metadata({ data: "json, name=payment_id" })
  paymentId?: string;

  @Metadata({ data: "json, name=processing_fee", elemType: shared.ProcessingFee })
  processingFee?: ProcessingFee[];

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
