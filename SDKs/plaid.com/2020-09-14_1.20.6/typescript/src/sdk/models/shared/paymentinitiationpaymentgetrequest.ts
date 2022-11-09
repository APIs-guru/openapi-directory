import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PaymentInitiationPaymentGetRequest
/** 
 * PaymentInitiationPaymentGetRequest defines the request schema for `/payment_initiation/payment/get`
**/
export class PaymentInitiationPaymentGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=payment_id" })
  paymentId: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
