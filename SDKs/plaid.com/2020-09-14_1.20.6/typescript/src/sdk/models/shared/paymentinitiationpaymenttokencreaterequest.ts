import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PaymentInitiationPaymentTokenCreateRequest
/** 
 * PaymentInitiationPaymentTokenCreateRequest defines the request schema for `/payment_initiation/payment/token/create`
**/
export class PaymentInitiationPaymentTokenCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=payment_id" })
  paymentId: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
