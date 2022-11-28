import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { TransactionAccount } from "./transactionaccount";


export enum TransactionStatusEnum {
    Pending = "pending",
    Posted = "posted"
}

export enum TransactionTypeEnum {
    Debit = "debit",
    Credit = "credit"
}


export class Transaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: Category;

  @SpeakeasyMetadata({ data: "json, name=cheque_number" })
  chequeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=closing_balance" })
  closingBalance?: number;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_transfer" })
  isTransfer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: string[];

  @SpeakeasyMetadata({ data: "json, name=memo" })
  memo?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=original_payee" })
  originalPayee?: string;

  @SpeakeasyMetadata({ data: "json, name=payee" })
  payee?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TransactionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=transaction_account" })
  transactionAccount?: TransactionAccount;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TransactionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=upload_source" })
  uploadSource?: string;
}
