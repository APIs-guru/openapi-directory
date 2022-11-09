import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PaymentInitiationRecipientGetRequest
/** 
 * PaymentInitiationRecipientGetRequest defines the request schema for `/payment_initiation/recipient/get`
**/
export class PaymentInitiationRecipientGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=recipient_id" })
  recipientId: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
