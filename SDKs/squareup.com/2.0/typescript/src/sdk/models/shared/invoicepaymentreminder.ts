import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InvoicePaymentReminder
/** 
 * Describes a payment request reminder (automatic notification) that Square sends
 * to the customer. You configure a reminder relative to the payment request
 * `due_date`.
**/
export class InvoicePaymentReminder extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=relative_scheduled_days" })
  relativeScheduledDays?: number;

  @Metadata({ data: "json, name=sent_at" })
  sentAt?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
