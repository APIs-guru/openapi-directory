import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Category } from "./category";
import { TransactionAccount } from "./transactionaccount";

export enum TransactionStatusEnum {
    Pending = "pending"
,    Posted = "posted"
}

export enum TransactionTypeEnum {
    Debit = "debit"
,    Credit = "credit"
}


export class Transaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=category" })
  category?: Category;

  @Metadata({ data: "json, name=cheque_number" })
  chequeNumber?: string;

  @Metadata({ data: "json, name=closing_balance" })
  closingBalance?: number;

  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=is_transfer" })
  isTransfer?: boolean;

  @Metadata({ data: "json, name=labels" })
  labels?: string[];

  @Metadata({ data: "json, name=memo" })
  memo?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=original_payee" })
  originalPayee?: string;

  @Metadata({ data: "json, name=payee" })
  payee?: string;

  @Metadata({ data: "json, name=status" })
  status?: TransactionStatusEnum;

  @Metadata({ data: "json, name=transaction_account" })
  transactionAccount?: TransactionAccount;

  @Metadata({ data: "json, name=type" })
  type?: TransactionTypeEnum;

  @Metadata({ data: "json, name=upload_source" })
  uploadSource?: string;
}
