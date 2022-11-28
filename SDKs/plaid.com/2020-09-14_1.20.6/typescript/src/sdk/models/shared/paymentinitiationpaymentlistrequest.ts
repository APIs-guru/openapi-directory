import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PaymentInitiationPaymentListRequest
/** 
 * PaymentInitiationPaymentListRequest defines the request schema for `/payment_initiation/payment/list`
**/
export class PaymentInitiationPaymentListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
