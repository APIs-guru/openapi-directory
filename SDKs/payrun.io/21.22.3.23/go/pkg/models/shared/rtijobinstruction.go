package shared

import (
	"time"
)

type RtiJobInstructionRtiJobInstructionEmployerEmployer struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type RtiJobInstructionRtiJobInstructionLateReasonLateReasonEnum string

const (
	RtiJobInstructionRtiJobInstructionLateReasonLateReasonEnumA RtiJobInstructionRtiJobInstructionLateReasonLateReasonEnum = "A"
	RtiJobInstructionRtiJobInstructionLateReasonLateReasonEnumB RtiJobInstructionRtiJobInstructionLateReasonLateReasonEnum = "B"
	RtiJobInstructionRtiJobInstructionLateReasonLateReasonEnumC RtiJobInstructionRtiJobInstructionLateReasonLateReasonEnum = "C"
	RtiJobInstructionRtiJobInstructionLateReasonLateReasonEnumD RtiJobInstructionRtiJobInstructionLateReasonLateReasonEnum = "D"
	RtiJobInstructionRtiJobInstructionLateReasonLateReasonEnumF RtiJobInstructionRtiJobInstructionLateReasonLateReasonEnum = "F"
	RtiJobInstructionRtiJobInstructionLateReasonLateReasonEnumG RtiJobInstructionRtiJobInstructionLateReasonLateReasonEnum = "G"
	RtiJobInstructionRtiJobInstructionLateReasonLateReasonEnumH RtiJobInstructionRtiJobInstructionLateReasonLateReasonEnum = "H"
)

type RtiJobInstructionRtiJobInstructionPaySchedulePaySchedule struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type RtiJobInstructionRtiJobInstructionRtiTransactionRtiTransaction struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type RtiJobInstructionRtiJobInstructionRtiJobInstruction struct {
	EarlierTaxYear         *int32                                                          `json:"EarlierTaxYear,omitempty"`
	Employer               *RtiJobInstructionRtiJobInstructionEmployerEmployer             `json:"Employer,omitempty"`
	FinalSubmissionForYear *bool                                                           `json:"FinalSubmissionForYear,omitempty"`
	Generate               *bool                                                           `json:"Generate,omitempty"`
	HoldingDate            *time.Time                                                      `json:"HoldingDate,omitempty"`
	LateReason             *RtiJobInstructionRtiJobInstructionLateReasonLateReasonEnum     `json:"LateReason,omitempty"`
	NoPaymentForPeriodFrom *time.Time                                                      `json:"NoPaymentForPeriodFrom,omitempty"`
	NoPaymentForPeriodTo   *time.Time                                                      `json:"NoPaymentForPeriodTo,omitempty"`
	PaySchedule            *RtiJobInstructionRtiJobInstructionPaySchedulePaySchedule       `json:"PaySchedule,omitempty"`
	PaymentDate            *time.Time                                                      `json:"PaymentDate,omitempty"`
	PeriodOfInactivityFrom *time.Time                                                      `json:"PeriodOfInactivityFrom,omitempty"`
	PeriodOfInactivityTo   *time.Time                                                      `json:"PeriodOfInactivityTo,omitempty"`
	RtiTransaction         *RtiJobInstructionRtiJobInstructionRtiTransactionRtiTransaction `json:"RtiTransaction,omitempty"`
	RtiType                *string                                                         `json:"RtiType,omitempty"`
	SchemeCeased           *time.Time                                                      `json:"SchemeCeased,omitempty"`
	TaxMonth               *int32                                                          `json:"TaxMonth,omitempty"`
	TaxYear                *int32                                                          `json:"TaxYear,omitempty"`
	Timestamp              *time.Time                                                      `json:"Timestamp,omitempty"`
	Transmit               *bool                                                           `json:"Transmit,omitempty"`
}

type RtiJobInstruction struct {
	RtiJobInstruction *RtiJobInstructionRtiJobInstructionRtiJobInstruction `json:"RtiJobInstruction,omitempty"`
}
