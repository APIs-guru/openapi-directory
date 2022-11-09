import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubTransaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=category_id" })
  categoryId?: string;

  @Metadata({ data: "json, name=category_name" })
  categoryName?: string;

  @Metadata({ data: "json, name=deleted" })
  deleted: boolean;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=memo" })
  memo?: string;

  @Metadata({ data: "json, name=payee_id" })
  payeeId?: string;

  @Metadata({ data: "json, name=payee_name" })
  payeeName?: string;

  @Metadata({ data: "json, name=transaction_id" })
  transactionId: string;

  @Metadata({ data: "json, name=transfer_account_id" })
  transferAccountId?: string;

  @Metadata({ data: "json, name=transfer_transaction_id" })
  transferTransactionId?: string;
}
