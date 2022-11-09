import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BankTransferEventTypeEnum } from "./banktransfereventtypeenum";

export enum BankTransferEventListRequestBankTransferTypeEnum {
    Debit = "debit"
,    Credit = "credit"
}

export enum BankTransferEventListRequestBankTransferDirectionEnum {
    Inbound = "inbound"
,    Outbound = "outbound"
}


// BankTransferEventListRequest
/** 
 * BankTransferEventListRequest defines the request schema for `/bank_transfer/event/list`
**/
export class BankTransferEventListRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_id" })
  accountId?: string;

  @Metadata({ data: "json, name=bank_transfer_id" })
  bankTransferId?: string;

  @Metadata({ data: "json, name=bank_transfer_type" })
  bankTransferType?: BankTransferEventListRequestBankTransferTypeEnum;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=direction" })
  direction?: BankTransferEventListRequestBankTransferDirectionEnum;

  @Metadata({ data: "json, name=end_date" })
  endDate?: Date;

  @Metadata({ data: "json, name=event_types" })
  eventTypes?: BankTransferEventTypeEnum[];

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=origination_account_id" })
  originationAccountId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=start_date" })
  startDate?: Date;
}
