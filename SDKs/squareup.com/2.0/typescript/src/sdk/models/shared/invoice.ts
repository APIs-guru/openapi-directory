import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InvoiceAcceptedPaymentMethods } from "./invoiceacceptedpaymentmethods";
import { InvoiceCustomField } from "./invoicecustomfield";
import { Money } from "./money";
import { InvoicePaymentRequest } from "./invoicepaymentrequest";
import { InvoiceRecipient } from "./invoicerecipient";


// Invoice
/** 
 * Stores information about an invoice. You use the Invoices API to create and manage
 * invoices. For more information, see [Manage Invoices Using the Invoices API](https://developer.squareup.com/docs/invoices-api/overview).
**/
export class Invoice extends SpeakeasyBase {
  @Metadata({ data: "json, name=accepted_payment_methods" })
  acceptedPaymentMethods?: InvoiceAcceptedPaymentMethods;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=custom_fields", elemType: shared.InvoiceCustomField })
  customFields?: InvoiceCustomField[];

  @Metadata({ data: "json, name=delivery_method" })
  deliveryMethod?: any;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=invoice_number" })
  invoiceNumber?: string;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=next_payment_amount_money" })
  nextPaymentAmountMoney?: Money;

  @Metadata({ data: "json, name=order_id" })
  orderId?: string;

  @Metadata({ data: "json, name=payment_requests", elemType: shared.InvoicePaymentRequest })
  paymentRequests?: InvoicePaymentRequest[];

  @Metadata({ data: "json, name=primary_recipient" })
  primaryRecipient?: InvoiceRecipient;

  @Metadata({ data: "json, name=public_url" })
  publicUrl?: string;

  @Metadata({ data: "json, name=scheduled_at" })
  scheduledAt?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=subscription_id" })
  subscriptionId?: string;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
