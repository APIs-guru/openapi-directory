import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScheduledSubTransaction } from "./scheduledsubtransaction";

export enum ScheduledTransactionDetailFlagColorEnum {
    Red = "red"
,    Orange = "orange"
,    Yellow = "yellow"
,    Green = "green"
,    Blue = "blue"
,    Purple = "purple"
}

export enum ScheduledTransactionDetailFrequencyEnum {
    Never = "never"
,    Daily = "daily"
,    Weekly = "weekly"
,    EveryOtherWeek = "everyOtherWeek"
,    TwiceAMonth = "twiceAMonth"
,    Every4Weeks = "every4Weeks"
,    Monthly = "monthly"
,    EveryOtherMonth = "everyOtherMonth"
,    Every3Months = "every3Months"
,    Every4Months = "every4Months"
,    TwiceAYear = "twiceAYear"
,    Yearly = "yearly"
,    EveryOtherYear = "everyOtherYear"
}


export class ScheduledTransactionDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_id" })
  accountId: string;

  @Metadata({ data: "json, name=account_name" })
  accountName: string;

  @Metadata({ data: "json, name=amount" })
  amount: number;

  @Metadata({ data: "json, name=category_id" })
  categoryId?: string;

  @Metadata({ data: "json, name=category_name" })
  categoryName?: string;

  @Metadata({ data: "json, name=date_first" })
  dateFirst: Date;

  @Metadata({ data: "json, name=date_next" })
  dateNext: Date;

  @Metadata({ data: "json, name=deleted" })
  deleted: boolean;

  @Metadata({ data: "json, name=flag_color" })
  flagColor?: ScheduledTransactionDetailFlagColorEnum;

  @Metadata({ data: "json, name=frequency" })
  frequency: ScheduledTransactionDetailFrequencyEnum;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=memo" })
  memo?: string;

  @Metadata({ data: "json, name=payee_id" })
  payeeId?: string;

  @Metadata({ data: "json, name=payee_name" })
  payeeName?: string;

  @Metadata({ data: "json, name=subtransactions", elemType: shared.ScheduledSubTransaction })
  subtransactions: ScheduledSubTransaction[];

  @Metadata({ data: "json, name=transfer_account_id" })
  transferAccountId?: string;
}
