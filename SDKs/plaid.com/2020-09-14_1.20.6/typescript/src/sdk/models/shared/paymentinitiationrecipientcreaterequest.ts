import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PaymentInitiationRecipientCreateRequest
/** 
 * PaymentInitiationRecipientCreateRequest defines the request schema for `/payment_initiation/recipient/create`
**/
export class PaymentInitiationRecipientCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: Map<string, any>;

  @Metadata({ data: "json, name=bacs" })
  bacs?: Map<string, any>;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=iban" })
  iban?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
