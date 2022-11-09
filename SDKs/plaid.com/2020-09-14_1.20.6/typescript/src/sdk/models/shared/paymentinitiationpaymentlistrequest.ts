import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PaymentInitiationPaymentListRequest
/** 
 * PaymentInitiationPaymentListRequest defines the request schema for `/payment_initiation/payment/list`
**/
export class PaymentInitiationPaymentListRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
