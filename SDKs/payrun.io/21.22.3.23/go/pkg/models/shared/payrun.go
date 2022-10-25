package shared

import (
	"time"
)

type PayRunPayRunPayFrequencyEnum string

const (
	PayRunPayRunPayFrequencyEnumWeekly     PayRunPayRunPayFrequencyEnum = "Weekly"
	PayRunPayRunPayFrequencyEnumMonthly    PayRunPayRunPayFrequencyEnum = "Monthly"
	PayRunPayRunPayFrequencyEnumTwoWeekly  PayRunPayRunPayFrequencyEnum = "TwoWeekly"
	PayRunPayRunPayFrequencyEnumFourWeekly PayRunPayRunPayFrequencyEnum = "FourWeekly"
	PayRunPayRunPayFrequencyEnumYearly     PayRunPayRunPayFrequencyEnum = "Yearly"
)

type PayRunPayRunPaySchedule struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type PayRunPayRunProceedingPayRun struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type PayRunPayRun struct {
	Executed         *time.Time                    `json:"Executed,omitempty"`
	IsSupplementary  *bool                         `json:"IsSupplementary,omitempty"`
	PayFrequency     *PayRunPayRunPayFrequencyEnum `json:"PayFrequency,omitempty"`
	PaySchedule      *PayRunPayRunPaySchedule      `json:"PaySchedule,omitempty"`
	PaymentDate      *time.Time                    `json:"PaymentDate,omitempty"`
	PeriodEnd        *time.Time                    `json:"PeriodEnd,omitempty"`
	PeriodStart      *time.Time                    `json:"PeriodStart,omitempty"`
	ProceedingPayRun *PayRunPayRunProceedingPayRun `json:"ProceedingPayRun,omitempty"`
	Sequence         *int32                        `json:"Sequence,omitempty"`
	TaxPeriod        *int32                        `json:"TaxPeriod,omitempty"`
	TaxYear          *int32                        `json:"TaxYear,omitempty"`
}

type PayRun struct {
	PayRun *PayRunPayRun `json:"PayRun,omitempty"`
}
