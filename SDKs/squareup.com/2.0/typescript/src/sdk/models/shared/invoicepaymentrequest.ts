import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Money } from "./money";
import { Money } from "./money";
import { InvoicePaymentReminder } from "./invoicepaymentreminder";
import { Money } from "./money";
import { Money } from "./money";


// InvoicePaymentRequest
/** 
 * Represents a payment request for an [invoice](https://developer.squareup.com/reference/square_2021-08-18/objects/Invoice). Invoices can specify a maximum
 * of 13 payment requests, with up to 12 `INSTALLMENT` request types. For more information, 
 * see [Payment requests](https://developer.squareup.com/docs/invoices-api/overview#payment-requests).
 * 
 * Adding `INSTALLMENT` payment requests to an invoice requires an 
 * [Invoices Plus subscription](https://developer.squareup.com/docs/invoices-api/overview#invoices-plus-subscription).
**/
export class InvoicePaymentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=automatic_payment_source" })
  automaticPaymentSource?: string;

  @Metadata({ data: "json, name=card_id" })
  cardId?: string;

  @Metadata({ data: "json, name=computed_amount_money" })
  computedAmountMoney?: Money;

  @Metadata({ data: "json, name=due_date" })
  dueDate?: string;

  @Metadata({ data: "json, name=fixed_amount_requested_money" })
  fixedAmountRequestedMoney?: Money;

  @Metadata({ data: "json, name=percentage_requested" })
  percentageRequested?: string;

  @Metadata({ data: "json, name=reminders", elemType: shared.InvoicePaymentReminder })
  reminders?: InvoicePaymentReminder[];

  @Metadata({ data: "json, name=request_method" })
  requestMethod?: string;

  @Metadata({ data: "json, name=request_type" })
  requestType?: string;

  @Metadata({ data: "json, name=rounding_adjustment_included_money" })
  roundingAdjustmentIncludedMoney?: Money;

  @Metadata({ data: "json, name=tipping_enabled" })
  tippingEnabled?: boolean;

  @Metadata({ data: "json, name=total_completed_amount_money" })
  totalCompletedAmountMoney?: Money;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
