import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


export class TerminalRefund extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_money" })
  amountMoney: Money;

  @Metadata({ data: "json, name=app_id" })
  appId?: string;

  @Metadata({ data: "json, name=cancel_reason" })
  cancelReason?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=deadline_duration" })
  deadlineDuration?: string;

  @Metadata({ data: "json, name=device_id" })
  deviceId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=order_id" })
  orderId?: string;

  @Metadata({ data: "json, name=payment_id" })
  paymentId: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=refund_id" })
  refundId?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
