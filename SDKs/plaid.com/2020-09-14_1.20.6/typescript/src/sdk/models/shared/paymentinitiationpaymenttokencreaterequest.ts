import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PaymentInitiationPaymentTokenCreateRequest
/** 
 * PaymentInitiationPaymentTokenCreateRequest defines the request schema for `/payment_initiation/payment/token/create`
**/
export class PaymentInitiationPaymentTokenCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=payment_id" })
  paymentId: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
