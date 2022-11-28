import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledSubTransaction } from "./scheduledsubtransaction";
export declare enum ScheduledTransactionDetailFlagColorEnum {
    Red = "red",
    Orange = "orange",
    Yellow = "yellow",
    Green = "green",
    Blue = "blue",
    Purple = "purple"
}
export declare enum ScheduledTransactionDetailFrequencyEnum {
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
export declare class ScheduledTransactionDetail extends SpeakeasyBase {
    accountId: string;
    accountName: string;
    amount: number;
    categoryId?: string;
    categoryName?: string;
    dateFirst: Date;
    dateNext: Date;
    deleted: boolean;
    flagColor?: ScheduledTransactionDetailFlagColorEnum;
    frequency: ScheduledTransactionDetailFrequencyEnum;
    id: string;
    memo?: string;
    payeeId?: string;
    payeeName?: string;
    subtransactions: ScheduledSubTransaction[];
    transferAccountId?: string;
}
