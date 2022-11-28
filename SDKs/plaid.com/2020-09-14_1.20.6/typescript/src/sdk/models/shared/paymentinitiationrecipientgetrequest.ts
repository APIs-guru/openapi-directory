import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PaymentInitiationRecipientGetRequest
/** 
 * PaymentInitiationRecipientGetRequest defines the request schema for `/payment_initiation/recipient/get`
**/
export class PaymentInitiationRecipientGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=recipient_id" })
  recipientId: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
