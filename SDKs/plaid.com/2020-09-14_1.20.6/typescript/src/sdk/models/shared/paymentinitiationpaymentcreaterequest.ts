import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PaymentInitiationPaymentCreateRequest
/** 
 * PaymentInitiationPaymentCreateRequest defines the request schema for `/payment_initiation/payment/create`
**/
export class PaymentInitiationPaymentCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=recipient_id" })
  recipientId: string;

  @SpeakeasyMetadata({ data: "json, name=reference" })
  reference: string;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
