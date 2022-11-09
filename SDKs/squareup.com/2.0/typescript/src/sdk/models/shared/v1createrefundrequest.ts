import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { V1Money } from "./v1money";


// V1CreateRefundRequest
/** 
 * V1CreateRefundRequest
**/
export class V1CreateRefundRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=payment_id" })
  paymentId: string;

  @Metadata({ data: "json, name=reason" })
  reason: string;

  @Metadata({ data: "json, name=refunded_money" })
  refundedMoney?: V1Money;

  @Metadata({ data: "json, name=request_idempotence_key" })
  requestIdempotenceKey?: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
