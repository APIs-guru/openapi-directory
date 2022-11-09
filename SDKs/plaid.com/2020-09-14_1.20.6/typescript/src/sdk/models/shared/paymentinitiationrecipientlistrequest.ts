import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PaymentInitiationRecipientListRequest
/** 
 * PaymentInitiationRecipientListRequest defines the request schema for `/payment_initiation/recipient/list`
**/
export class PaymentInitiationRecipientListRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
