import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PaymentInitiationRecipientCreateRequest
/** 
 * PaymentInitiationRecipientCreateRequest defines the request schema for `/payment_initiation/recipient/create`
**/
export class PaymentInitiationRecipientCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=bacs" })
  bacs?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=iban" })
  iban?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
