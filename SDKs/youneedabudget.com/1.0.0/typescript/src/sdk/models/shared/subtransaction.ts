import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=category_id" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=category_name" })
  categoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=memo" })
  memo?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_id" })
  payeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_name" })
  payeeName?: string;

  @SpeakeasyMetadata({ data: "json, name=transaction_id" })
  transactionId: string;

  @SpeakeasyMetadata({ data: "json, name=transfer_account_id" })
  transferAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=transfer_transaction_id" })
  transferTransactionId?: string;
}
