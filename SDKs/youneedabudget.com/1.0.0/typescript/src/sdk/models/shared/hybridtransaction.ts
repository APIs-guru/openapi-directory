import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum HybridTransactionClearedEnum {
    Cleared = "cleared",
    Uncleared = "uncleared",
    Reconciled = "reconciled"
}

export enum HybridTransactionFlagColorEnum {
    Red = "red",
    Orange = "orange",
    Yellow = "yellow",
    Green = "green",
    Blue = "blue",
    Purple = "purple"
}

export enum HybridTransactionTypeEnum {
    Transaction = "transaction",
    Subtransaction = "subtransaction"
}


export class HybridTransaction extends SpeakeasyBase {
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
  cleared: HybridTransactionClearedEnum;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted: boolean;

  @SpeakeasyMetadata({ data: "json, name=flag_color" })
  flagColor?: HybridTransactionFlagColorEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=import_id" })
  importId?: string;

  @SpeakeasyMetadata({ data: "json, name=matched_transaction_id" })
  matchedTransactionId?: string;

  @SpeakeasyMetadata({ data: "json, name=memo" })
  memo?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_transaction_id" })
  parentTransactionId?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_id" })
  payeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_name" })
  payeeName?: string;

  @SpeakeasyMetadata({ data: "json, name=transfer_account_id" })
  transferAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=transfer_transaction_id" })
  transferTransactionId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: HybridTransactionTypeEnum;
}
