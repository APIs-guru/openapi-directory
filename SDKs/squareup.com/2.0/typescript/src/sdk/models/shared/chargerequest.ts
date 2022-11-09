import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdditionalRecipient } from "./additionalrecipient";
import { Money } from "./money";
import { Address } from "./address";
import { Address } from "./address";


// ChargeRequest
/** 
 * Defines the parameters that can be included in the body of
 * a request to the [Charge](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/charge) endpoint.
 * 
 * Deprecated - recommend using [CreatePayment](https://developer.squareup.com/reference/square_2021-08-18/payments-api/create-payment)
**/
export class ChargeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=additional_recipients", elemType: shared.AdditionalRecipient })
  additionalRecipients?: AdditionalRecipient[];

  @Metadata({ data: "json, name=amount_money" })
  amountMoney: Money;

  @Metadata({ data: "json, name=billing_address" })
  billingAddress?: Address;

  @Metadata({ data: "json, name=buyer_email_address" })
  buyerEmailAddress?: string;

  @Metadata({ data: "json, name=card_nonce" })
  cardNonce?: string;

  @Metadata({ data: "json, name=customer_card_id" })
  customerCardId?: string;

  @Metadata({ data: "json, name=customer_id" })
  customerId?: string;

  @Metadata({ data: "json, name=delay_capture" })
  delayCapture?: boolean;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=order_id" })
  orderId?: string;

  @Metadata({ data: "json, name=reference_id" })
  referenceId?: string;

  @Metadata({ data: "json, name=shipping_address" })
  shippingAddress?: Address;

  @Metadata({ data: "json, name=verification_token" })
  verificationToken?: string;
}
