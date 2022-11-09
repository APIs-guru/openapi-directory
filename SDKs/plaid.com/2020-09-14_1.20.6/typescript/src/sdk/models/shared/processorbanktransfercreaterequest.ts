import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AchClassEnum } from "./achclassenum";
import { BankTransferNetworkEnum } from "./banktransfernetworkenum";
import { BankTransferTypeEnum } from "./banktransfertypeenum";


// ProcessorBankTransferCreateRequest
/** 
 * ProcessorBankTransferCreateRequest defines the request schema for `/processor/bank_transfer/create`
**/
export class ProcessorBankTransferCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ach_class" })
  achClass?: AchClassEnum;

  @Metadata({ data: "json, name=amount" })
  amount: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=custom_tag" })
  customTag?: string;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;

  @Metadata({ data: "json, name=iso_currency_code" })
  isoCurrencyCode: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=network" })
  network: BankTransferNetworkEnum;

  @Metadata({ data: "json, name=origination_account_id" })
  originationAccountId?: string;

  @Metadata({ data: "json, name=processor_token" })
  processorToken: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=type" })
  type: BankTransferTypeEnum;

  @Metadata({ data: "json, name=user" })
  user: Map<string, any>;
}
