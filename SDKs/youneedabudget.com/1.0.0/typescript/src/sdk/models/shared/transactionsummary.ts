import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TransactionSummaryClearedEnum {
    Cleared = "cleared",
    Uncleared = "uncleared",
    Reconciled = "reconciled"
}

export enum TransactionSummaryFlagColorEnum {
    Red = "red",
    Orange = "orange",
    Yellow = "yellow",
    Green = "green",
    Blue = "blue",
    Purple = "purple"
}


export class TransactionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=approved" })
  approved: boolean;

  @SpeakeasyMetadata({ data: "json, name=category_id" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=cleared" })
  cleared: TransactionSummaryClearedEnum;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted: boolean;

  @SpeakeasyMetadata({ data: "json, name=flag_color" })
  flagColor?: TransactionSummaryFlagColorEnum;

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

  @SpeakeasyMetadata({ data: "json, name=transfer_account_id" })
  transferAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=transfer_transaction_id" })
  transferTransactionId?: string;
}
