import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BankTransferEventTypeEnum } from "./banktransfereventtypeenum";


export enum BankTransferEventListRequestBankTransferTypeEnum {
    Debit = "debit",
    Credit = "credit"
}

export enum BankTransferEventListRequestBankTransferDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}


// BankTransferEventListRequest
/** 
 * BankTransferEventListRequest defines the request schema for `/bank_transfer/event/list`
**/
export class BankTransferEventListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=bank_transfer_id" })
  bankTransferId?: string;

  @SpeakeasyMetadata({ data: "json, name=bank_transfer_type" })
  bankTransferType?: BankTransferEventListRequestBankTransferTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: BankTransferEventListRequestBankTransferDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=event_types" })
  eventTypes?: BankTransferEventTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=origination_account_id" })
  originationAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: Date;
}
