import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PaymentInitiationRecipientListRequest
/** 
 * PaymentInitiationRecipientListRequest defines the request schema for `/payment_initiation/recipient/list`
**/
export class PaymentInitiationRecipientListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
