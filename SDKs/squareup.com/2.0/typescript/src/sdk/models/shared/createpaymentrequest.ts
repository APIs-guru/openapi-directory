import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";
import { Money } from "./money";
import { Address } from "./address";
import { CashPaymentDetails } from "./cashpaymentdetails";
import { ExternalPaymentDetails } from "./externalpaymentdetails";
import { Address } from "./address";
import { Money } from "./money";


// CreatePaymentRequest
/** 
 * Describes a request to create a payment using 
 * [CreatePayment](https://developer.squareup.com/reference/square_2021-08-18/payments-api/create-payment).
**/
export class CreatePaymentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accept_partial_authorization" })
  acceptPartialAuthorization?: boolean;

  @Metadata({ data: "json, name=amount_money" })
  amountMoney: Money;

  @Metadata({ data: "json, name=app_fee_money" })
  appFeeMoney?: Money;

  @Metadata({ data: "json, name=autocomplete" })
  autocomplete?: boolean;

  @Metadata({ data: "json, name=billing_address" })
  billingAddress?: Address;

  @Metadata({ data: "json, name=buyer_email_address" })
  buyerEmailAddress?: string;

  @Metadata({ data: "json, name=cash_details" })
  cashDetails?: CashPaymentDetails;

  @Metadata({ data: "json, name=customer_id" })
  customerId?: string;

  @Metadata({ data: "json, name=delay_duration" })
  delayDuration?: string;

  @Metadata({ data: "json, name=external_details" })
  externalDetails?: ExternalPaymentDetails;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=order_id" })
  orderId?: string;

  @Metadata({ data: "json, name=reference_id" })
  referenceId?: string;

  @Metadata({ data: "json, name=shipping_address" })
  shippingAddress?: Address;

  @Metadata({ data: "json, name=source_id" })
  sourceId: string;

  @Metadata({ data: "json, name=statement_description_identifier" })
  statementDescriptionIdentifier?: string;

  @Metadata({ data: "json, name=tip_money" })
  tipMoney?: Money;

  @Metadata({ data: "json, name=verification_token" })
  verificationToken?: string;
}
