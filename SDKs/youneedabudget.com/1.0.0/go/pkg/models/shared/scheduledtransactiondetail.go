package shared

import (
"time")


type ScheduledTransactionDetailFlagColorEnum string

const (
    ScheduledTransactionDetailFlagColorEnumRed ScheduledTransactionDetailFlagColorEnum = "red"
ScheduledTransactionDetailFlagColorEnumOrange ScheduledTransactionDetailFlagColorEnum = "orange"
ScheduledTransactionDetailFlagColorEnumYellow ScheduledTransactionDetailFlagColorEnum = "yellow"
ScheduledTransactionDetailFlagColorEnumGreen ScheduledTransactionDetailFlagColorEnum = "green"
ScheduledTransactionDetailFlagColorEnumBlue ScheduledTransactionDetailFlagColorEnum = "blue"
ScheduledTransactionDetailFlagColorEnumPurple ScheduledTransactionDetailFlagColorEnum = "purple"
)



type ScheduledTransactionDetailFrequencyEnum string

const (
    ScheduledTransactionDetailFrequencyEnumNever ScheduledTransactionDetailFrequencyEnum = "never"
ScheduledTransactionDetailFrequencyEnumDaily ScheduledTransactionDetailFrequencyEnum = "daily"
ScheduledTransactionDetailFrequencyEnumWeekly ScheduledTransactionDetailFrequencyEnum = "weekly"
ScheduledTransactionDetailFrequencyEnumEveryOtherWeek ScheduledTransactionDetailFrequencyEnum = "everyOtherWeek"
ScheduledTransactionDetailFrequencyEnumTwiceAMonth ScheduledTransactionDetailFrequencyEnum = "twiceAMonth"
ScheduledTransactionDetailFrequencyEnumEvery4Weeks ScheduledTransactionDetailFrequencyEnum = "every4Weeks"
ScheduledTransactionDetailFrequencyEnumMonthly ScheduledTransactionDetailFrequencyEnum = "monthly"
ScheduledTransactionDetailFrequencyEnumEveryOtherMonth ScheduledTransactionDetailFrequencyEnum = "everyOtherMonth"
ScheduledTransactionDetailFrequencyEnumEvery3Months ScheduledTransactionDetailFrequencyEnum = "every3Months"
ScheduledTransactionDetailFrequencyEnumEvery4Months ScheduledTransactionDetailFrequencyEnum = "every4Months"
ScheduledTransactionDetailFrequencyEnumTwiceAYear ScheduledTransactionDetailFrequencyEnum = "twiceAYear"
ScheduledTransactionDetailFrequencyEnumYearly ScheduledTransactionDetailFrequencyEnum = "yearly"
ScheduledTransactionDetailFrequencyEnumEveryOtherYear ScheduledTransactionDetailFrequencyEnum = "everyOtherYear"
)


type ScheduledTransactionDetail struct {
    AccountID string `json:"account_id"`
    AccountName string `json:"account_name"`
    Amount int64 `json:"amount"`
    CategoryID *string `json:"category_id,omitempty"`
    CategoryName *string `json:"category_name,omitempty"`
    DateFirst time.Time `json:"date_first"`
    DateNext time.Time `json:"date_next"`
    Deleted bool `json:"deleted"`
    FlagColor *ScheduledTransactionDetailFlagColorEnum `json:"flag_color,omitempty"`
    Frequency ScheduledTransactionDetailFrequencyEnum `json:"frequency"`
    ID string `json:"id"`
    Memo *string `json:"memo,omitempty"`
    PayeeID *string `json:"payee_id,omitempty"`
    PayeeName *string `json:"payee_name,omitempty"`
    Subtransactions []ScheduledSubTransaction `json:"subtransactions"`
    TransferAccountID *string `json:"transfer_account_id,omitempty"`
    
}

