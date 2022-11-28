import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ScheduledTransactionSummaryFlagColorEnum {
    Red = "red",
    Orange = "orange",
    Yellow = "yellow",
    Green = "green",
    Blue = "blue",
    Purple = "purple"
}
export declare enum ScheduledTransactionSummaryFrequencyEnum {
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
export declare class ScheduledTransactionSummary extends SpeakeasyBase {
    accountId: string;
    amount: number;
    categoryId?: string;
    dateFirst: Date;
    dateNext: Date;
    deleted: boolean;
    flagColor?: ScheduledTransactionSummaryFlagColorEnum;
    frequency: ScheduledTransactionSummaryFrequencyEnum;
    id: string;
    memo?: string;
    payeeId?: string;
    transferAccountId?: string;
}
