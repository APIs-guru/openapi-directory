import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TransactionSummaryClearedEnum {
    Cleared = "cleared"
,    Uncleared = "uncleared"
,    Reconciled = "reconciled"
}

export enum TransactionSummaryFlagColorEnum {
    Red = "red"
,    Orange = "orange"
,    Yellow = "yellow"
,    Green = "green"
,    Blue = "blue"
,    Purple = "purple"
}


export class TransactionSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_id" })
  accountId: string;

  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=approved" })
  approved: boolean;

  @Metadata({ data: "json, name=category_id" })
  categoryId?: string;

  @Metadata({ data: "json, name=cleared" })
  cleared: TransactionSummaryClearedEnum;

  @Metadata({ data: "json, name=date" })
  date: Date;

  @Metadata({ data: "json, name=deleted" })
  deleted: boolean;

  @Metadata({ data: "json, name=flag_color" })
  flagColor?: TransactionSummaryFlagColorEnum;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=import_id" })
  importId?: string;

  @Metadata({ data: "json, name=matched_transaction_id" })
  matchedTransactionId?: string;

  @Metadata({ data: "json, name=memo" })
  memo?: string;

  @Metadata({ data: "json, name=payee_id" })
  payeeId?: string;

  @Metadata({ data: "json, name=transfer_account_id" })
  transferAccountId?: string;

  @Metadata({ data: "json, name=transfer_transaction_id" })
  transferTransactionId?: string;
}
