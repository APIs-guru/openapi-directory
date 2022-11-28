import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduledSubTransaction } from "./scheduledsubtransaction";


export enum ScheduledTransactionDetailFlagColorEnum {
    Red = "red",
    Orange = "orange",
    Yellow = "yellow",
    Green = "green",
    Blue = "blue",
    Purple = "purple"
}

export enum ScheduledTransactionDetailFrequencyEnum {
    Never = "never",
    Daily = "daily",
    Weekly = "weekly",
    EveryOtherWeek = "everyOtherWeek",
    TwiceAMonth = "twiceAMonth",
    Every4Weeks = "every4Weeks",
    Monthly = "monthly",
    EveryOtherMonth = "everyOtherMonth",
    Every3Months = "every3Months",
    Every4Months = "every4Months",
    TwiceAYear = "twiceAYear",
    Yearly = "yearly",
    EveryOtherYear = "everyOtherYear"
}


export class ScheduledTransactionDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=account_name" })
  accountName: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=category_id" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=category_name" })
  categoryName?: string;

  @SpeakeasyMetadata({ data: "json, name=date_first" })
  dateFirst: Date;

  @SpeakeasyMetadata({ data: "json, name=date_next" })
  dateNext: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted: boolean;

  @SpeakeasyMetadata({ data: "json, name=flag_color" })
  flagColor?: ScheduledTransactionDetailFlagColorEnum;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency: ScheduledTransactionDetailFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=memo" })
  memo?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_id" })
  payeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_name" })
  payeeName?: string;

  @SpeakeasyMetadata({ data: "json, name=subtransactions", elemType: ScheduledSubTransaction })
  subtransactions: ScheduledSubTransaction[];

  @SpeakeasyMetadata({ data: "json, name=transfer_account_id" })
  transferAccountId?: string;
}
