package shared

import (
	"time"
)

type PayRunPayRunPayFrequencyPayFrequencyEnum string

const (
	PayRunPayRunPayFrequencyPayFrequencyEnumWeekly     PayRunPayRunPayFrequencyPayFrequencyEnum = "Weekly"
	PayRunPayRunPayFrequencyPayFrequencyEnumMonthly    PayRunPayRunPayFrequencyPayFrequencyEnum = "Monthly"
	PayRunPayRunPayFrequencyPayFrequencyEnumTwoWeekly  PayRunPayRunPayFrequencyPayFrequencyEnum = "TwoWeekly"
	PayRunPayRunPayFrequencyPayFrequencyEnumFourWeekly PayRunPayRunPayFrequencyPayFrequencyEnum = "FourWeekly"
	PayRunPayRunPayFrequencyPayFrequencyEnumYearly     PayRunPayRunPayFrequencyPayFrequencyEnum = "Yearly"
)

type PayRunPayRunPaySchedulePaySchedule struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type PayRunPayRunProceedingPayRunProceedingPayRun struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type PayRunPayRunPayRun struct {
	Executed         *time.Time                                    `json:"Executed,omitempty"`
	IsSupplementary  *bool                                         `json:"IsSupplementary,omitempty"`
	PayFrequency     *PayRunPayRunPayFrequencyPayFrequencyEnum     `json:"PayFrequency,omitempty"`
	PaySchedule      *PayRunPayRunPaySchedulePaySchedule           `json:"PaySchedule,omitempty"`
	PaymentDate      *time.Time                                    `json:"PaymentDate,omitempty"`
	PeriodEnd        *time.Time                                    `json:"PeriodEnd,omitempty"`
	PeriodStart      *time.Time                                    `json:"PeriodStart,omitempty"`
	ProceedingPayRun *PayRunPayRunProceedingPayRunProceedingPayRun `json:"ProceedingPayRun,omitempty"`
	Sequence         *int32                                        `json:"Sequence,omitempty"`
	TaxPeriod        *int32                                        `json:"TaxPeriod,omitempty"`
	TaxYear          *int32                                        `json:"TaxYear,omitempty"`
}

type PayRun struct {
	PayRun *PayRunPayRunPayRun `json:"PayRun,omitempty"`
}
