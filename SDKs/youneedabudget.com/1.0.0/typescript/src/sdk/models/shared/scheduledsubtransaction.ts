import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScheduledSubTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=category_id" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=memo" })
  memo?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_id" })
  payeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduled_transaction_id" })
  scheduledTransactionId: string;

  @SpeakeasyMetadata({ data: "json, name=transfer_account_id" })
  transferAccountId?: string;
}
