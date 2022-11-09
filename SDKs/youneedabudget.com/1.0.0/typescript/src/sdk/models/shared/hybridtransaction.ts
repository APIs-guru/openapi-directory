import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum HybridTransactionClearedEnum {
    Cleared = "cleared"
,    Uncleared = "uncleared"
,    Reconciled = "reconciled"
}

export enum HybridTransactionFlagColorEnum {
    Red = "red"
,    Orange = "orange"
,    Yellow = "yellow"
,    Green = "green"
,    Blue = "blue"
,    Purple = "purple"
}

export enum HybridTransactionTypeEnum {
    Transaction = "transaction"
,    Subtransaction = "subtransaction"
}


export class HybridTransaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_id" })
  accountId: string;

  @Metadata({ data: "json, name=account_name" })
  accountName: string;

  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=approved" })
  approved: boolean;

  @Metadata({ data: "json, name=category_id" })
  categoryId?: string;

  @Metadata({ data: "json, name=category_name" })
  categoryName?: string;

  @Metadata({ data: "json, name=cleared" })
  cleared: HybridTransactionClearedEnum;

  @Metadata({ data: "json, name=date" })
  date: Date;

  @Metadata({ data: "json, name=deleted" })
  deleted: boolean;

  @Metadata({ data: "json, name=flag_color" })
  flagColor?: HybridTransactionFlagColorEnum;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=import_id" })
  importId?: string;

  @Metadata({ data: "json, name=matched_transaction_id" })
  matchedTransactionId?: string;

  @Metadata({ data: "json, name=memo" })
  memo?: string;

  @Metadata({ data: "json, name=parent_transaction_id" })
  parentTransactionId?: string;

  @Metadata({ data: "json, name=payee_id" })
  payeeId?: string;

  @Metadata({ data: "json, name=payee_name" })
  payeeName?: string;

  @Metadata({ data: "json, name=transfer_account_id" })
  transferAccountId?: string;

  @Metadata({ data: "json, name=transfer_transaction_id" })
  transferTransactionId?: string;

  @Metadata({ data: "json, name=type" })
  type: HybridTransactionTypeEnum;
}
