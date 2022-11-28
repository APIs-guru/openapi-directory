import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PaymentInitiationPaymentGetRequest
/** 
 * PaymentInitiationPaymentGetRequest defines the request schema for `/payment_initiation/payment/get`
**/
export class PaymentInitiationPaymentGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=payment_id" })
  paymentId: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
