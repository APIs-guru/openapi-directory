import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PaymentInitiationPaymentCreateRequest
/** 
 * PaymentInitiationPaymentCreateRequest defines the request schema for `/payment_initiation/payment/create`
**/
export class PaymentInitiationPaymentCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: Map<string, any>;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=options" })
  options?: Map<string, any>;

  @Metadata({ data: "json, name=recipient_id" })
  recipientId: string;

  @Metadata({ data: "json, name=reference" })
  reference: string;

  @Metadata({ data: "json, name=schedule" })
  schedule?: Map<string, any>;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
