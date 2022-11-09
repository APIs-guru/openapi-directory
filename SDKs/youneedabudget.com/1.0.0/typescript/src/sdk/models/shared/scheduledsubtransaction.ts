import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScheduledSubTransaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=category_id" })
  categoryId?: string;

  @Metadata({ data: "json, name=deleted" })
  deleted: boolean;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=memo" })
  memo?: string;

  @Metadata({ data: "json, name=payee_id" })
  payeeId?: string;

  @Metadata({ data: "json, name=scheduled_transaction_id" })
  scheduledTransactionId: string;

  @Metadata({ data: "json, name=transfer_account_id" })
  transferAccountId?: string;
}
