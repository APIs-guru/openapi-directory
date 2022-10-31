package shared

import (
"time")


type ScheduledTransactionSummaryFlagColorEnum string

const (
    ScheduledTransactionSummaryFlagColorEnumRed ScheduledTransactionSummaryFlagColorEnum = "red"
ScheduledTransactionSummaryFlagColorEnumOrange ScheduledTransactionSummaryFlagColorEnum = "orange"
ScheduledTransactionSummaryFlagColorEnumYellow ScheduledTransactionSummaryFlagColorEnum = "yellow"
ScheduledTransactionSummaryFlagColorEnumGreen ScheduledTransactionSummaryFlagColorEnum = "green"
ScheduledTransactionSummaryFlagColorEnumBlue ScheduledTransactionSummaryFlagColorEnum = "blue"
ScheduledTransactionSummaryFlagColorEnumPurple ScheduledTransactionSummaryFlagColorEnum = "purple"
)



type ScheduledTransactionSummaryFrequencyEnum string

const (
    ScheduledTransactionSummaryFrequencyEnumNever ScheduledTransactionSummaryFrequencyEnum = "never"
ScheduledTransactionSummaryFrequencyEnumDaily ScheduledTransactionSummaryFrequencyEnum = "daily"
ScheduledTransactionSummaryFrequencyEnumWeekly ScheduledTransactionSummaryFrequencyEnum = "weekly"
ScheduledTransactionSummaryFrequencyEnumEveryOtherWeek ScheduledTransactionSummaryFrequencyEnum = "everyOtherWeek"
ScheduledTransactionSummaryFrequencyEnumTwiceAMonth ScheduledTransactionSummaryFrequencyEnum = "twiceAMonth"
ScheduledTransactionSummaryFrequencyEnumEvery4Weeks ScheduledTransactionSummaryFrequencyEnum = "every4Weeks"
ScheduledTransactionSummaryFrequencyEnumMonthly ScheduledTransactionSummaryFrequencyEnum = "monthly"
ScheduledTransactionSummaryFrequencyEnumEveryOtherMonth ScheduledTransactionSummaryFrequencyEnum = "everyOtherMonth"
ScheduledTransactionSummaryFrequencyEnumEvery3Months ScheduledTransactionSummaryFrequencyEnum = "every3Months"
ScheduledTransactionSummaryFrequencyEnumEvery4Months ScheduledTransactionSummaryFrequencyEnum = "every4Months"
ScheduledTransactionSummaryFrequencyEnumTwiceAYear ScheduledTransactionSummaryFrequencyEnum = "twiceAYear"
ScheduledTransactionSummaryFrequencyEnumYearly ScheduledTransactionSummaryFrequencyEnum = "yearly"
ScheduledTransactionSummaryFrequencyEnumEveryOtherYear ScheduledTransactionSummaryFrequencyEnum = "everyOtherYear"
)


type ScheduledTransactionSummary struct {
    AccountID string `json:"account_id"`
    Amount int64 `json:"amount"`
    CategoryID *string `json:"category_id,omitempty"`
    DateFirst time.Time `json:"date_first"`
    DateNext time.Time `json:"date_next"`
    Deleted bool `json:"deleted"`
    FlagColor *ScheduledTransactionSummaryFlagColorEnum `json:"flag_color,omitempty"`
    Frequency ScheduledTransactionSummaryFrequencyEnum `json:"frequency"`
    ID string `json:"id"`
    Memo *string `json:"memo,omitempty"`
    PayeeID *string `json:"payee_id,omitempty"`
    TransferAccountID *string `json:"transfer_account_id,omitempty"`
    
}

