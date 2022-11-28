import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AchClassEnum } from "./achclassenum";
import { BankTransferNetworkEnum } from "./banktransfernetworkenum";
import { BankTransferTypeEnum } from "./banktransfertypeenum";



// ProcessorBankTransferCreateRequest
/** 
 * ProcessorBankTransferCreateRequest defines the request schema for `/processor/bank_transfer/create`
**/
export class ProcessorBankTransferCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ach_class" })
  achClass?: AchClassEnum;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_tag" })
  customTag?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;

  @SpeakeasyMetadata({ data: "json, name=iso_currency_code" })
  isoCurrencyCode: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network: BankTransferNetworkEnum;

  @SpeakeasyMetadata({ data: "json, name=origination_account_id" })
  originationAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=processor_token" })
  processorToken: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: BankTransferTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: Map<string, any>;
}
