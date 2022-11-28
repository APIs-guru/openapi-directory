import { SpeakeasyBase } from "../../../internal/utils";
import { BankTransferEventTypeEnum } from "./banktransfereventtypeenum";
export declare enum BankTransferEventListRequestBankTransferTypeEnum {
    Debit = "debit",
    Credit = "credit"
}
export declare enum BankTransferEventListRequestBankTransferDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
/**
 * BankTransferEventListRequest defines the request schema for `/bank_transfer/event/list`
**/
export declare class BankTransferEventListRequest extends SpeakeasyBase {
    accountId?: string;
    bankTransferId?: string;
    bankTransferType?: BankTransferEventListRequestBankTransferTypeEnum;
    clientId?: string;
    count?: number;
    direction?: BankTransferEventListRequestBankTransferDirectionEnum;
    endDate?: Date;
    eventTypes?: BankTransferEventTypeEnum[];
    offset?: number;
    originationAccountId?: string;
    secret?: string;
    startDate?: Date;
}
