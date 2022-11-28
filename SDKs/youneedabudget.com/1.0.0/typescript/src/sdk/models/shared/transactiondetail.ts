import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubTransaction } from "./subtransaction";


export enum TransactionDetailClearedEnum {
    Cleared = "cleared",
    Uncleared = "uncleared",
    Reconciled = "reconciled"
}

export enum TransactionDetailFlagColorEnum {
    Red = "red",
    Orange = "orange",
    Yellow = "yellow",
    Green = "green",
    Blue = "blue",
    Purple = "purple"
}


export class TransactionDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=account_name" })
  accountName: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=approved" })
  approved: boolean;

  @SpeakeasyMetadata({ data: "json, name=category_id" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=category_name" })
  categoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=cleared" })
  cleared: TransactionDetailClearedEnum;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted: boolean;

  @SpeakeasyMetadata({ data: "json, name=flag_color" })
  flagColor?: TransactionDetailFlagColorEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=import_id" })
  importId?: string;

  @SpeakeasyMetadata({ data: "json, name=matched_transaction_id" })
  matchedTransactionId?: string;

  @SpeakeasyMetadata({ data: "json, name=memo" })
  memo?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_id" })
  payeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_name" })
  payeeName?: string;

  @SpeakeasyMetadata({ data: "json, name=subtransactions", elemType: SubTransaction })
  subtransactions: SubTransaction[];

  @SpeakeasyMetadata({ data: "json, name=transfer_account_id" })
  transferAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=transfer_transaction_id" })
  transferTransactionId?: string;
}
