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
	AtHref  *string `json:"@href"`
	AtRel   *string `json:"@rel"`
	AtTitle *string `json:"@title"`
}

type PayRunPayRunProceedingPayRunProceedingPayRun struct {
	AtHref  *string `json:"@href"`
	AtRel   *string `json:"@rel"`
	AtTitle *string `json:"@title"`
}

type PayRunPayRunPayRun struct {
	Executed         *time.Time                                    `json:"Executed"`
	IsSupplementary  *bool                                         `json:"IsSupplementary"`
	PayFrequency     *PayRunPayRunPayFrequencyPayFrequencyEnum     `json:"PayFrequency"`
	PaySchedule      *PayRunPayRunPaySchedulePaySchedule           `json:"PaySchedule"`
	PaymentDate      *time.Time                                    `json:"PaymentDate"`
	PeriodEnd        *time.Time                                    `json:"PeriodEnd"`
	PeriodStart      *time.Time                                    `json:"PeriodStart"`
	ProceedingPayRun *PayRunPayRunProceedingPayRunProceedingPayRun `json:"ProceedingPayRun"`
	Sequence         *int32                                        `json:"Sequence"`
	TaxPeriod        *int32                                        `json:"TaxPeriod"`
	TaxYear          *int32                                        `json:"TaxYear"`
}

type PayRun struct {
	PayRun *PayRunPayRunPayRun `json:"PayRun"`
}
