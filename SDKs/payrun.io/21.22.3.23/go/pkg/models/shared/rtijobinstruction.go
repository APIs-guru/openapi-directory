package shared

import (
	"time"
)

// RtiJobInstructionRtiJobInstructionEmployer
// The rti job instructions' employer
type RtiJobInstructionRtiJobInstructionEmployer struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type RtiJobInstructionRtiJobInstructionLateReasonEnum string

const (
	RtiJobInstructionRtiJobInstructionLateReasonEnumA RtiJobInstructionRtiJobInstructionLateReasonEnum = "A"
	RtiJobInstructionRtiJobInstructionLateReasonEnumB RtiJobInstructionRtiJobInstructionLateReasonEnum = "B"
	RtiJobInstructionRtiJobInstructionLateReasonEnumC RtiJobInstructionRtiJobInstructionLateReasonEnum = "C"
	RtiJobInstructionRtiJobInstructionLateReasonEnumD RtiJobInstructionRtiJobInstructionLateReasonEnum = "D"
	RtiJobInstructionRtiJobInstructionLateReasonEnumF RtiJobInstructionRtiJobInstructionLateReasonEnum = "F"
	RtiJobInstructionRtiJobInstructionLateReasonEnumG RtiJobInstructionRtiJobInstructionLateReasonEnum = "G"
	RtiJobInstructionRtiJobInstructionLateReasonEnumH RtiJobInstructionRtiJobInstructionLateReasonEnum = "H"
)

// RtiJobInstructionRtiJobInstructionPaySchedule
// The rti job instructions' pay schedule
type RtiJobInstructionRtiJobInstructionPaySchedule struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

// RtiJobInstructionRtiJobInstructionRtiTransaction
// The rti job instructions' rti transaction
type RtiJobInstructionRtiJobInstructionRtiTransaction struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type RtiJobInstructionRtiJobInstruction struct {
	EarlierTaxYear         *int32                                            `json:"EarlierTaxYear,omitempty"`
	Employer               *RtiJobInstructionRtiJobInstructionEmployer       `json:"Employer,omitempty"`
	FinalSubmissionForYear *bool                                             `json:"FinalSubmissionForYear,omitempty"`
	Generate               *bool                                             `json:"Generate,omitempty"`
	HoldingDate            *time.Time                                        `json:"HoldingDate,omitempty"`
	LateReason             *RtiJobInstructionRtiJobInstructionLateReasonEnum `json:"LateReason,omitempty"`
	NoPaymentForPeriodFrom *time.Time                                        `json:"NoPaymentForPeriodFrom,omitempty"`
	NoPaymentForPeriodTo   *time.Time                                        `json:"NoPaymentForPeriodTo,omitempty"`
	PaySchedule            *RtiJobInstructionRtiJobInstructionPaySchedule    `json:"PaySchedule,omitempty"`
	PaymentDate            *time.Time                                        `json:"PaymentDate,omitempty"`
	PeriodOfInactivityFrom *time.Time                                        `json:"PeriodOfInactivityFrom,omitempty"`
	PeriodOfInactivityTo   *time.Time                                        `json:"PeriodOfInactivityTo,omitempty"`
	RtiTransaction         *RtiJobInstructionRtiJobInstructionRtiTransaction `json:"RtiTransaction,omitempty"`
	RtiType                *string                                           `json:"RtiType,omitempty"`
	SchemeCeased           *time.Time                                        `json:"SchemeCeased,omitempty"`
	TaxMonth               *int32                                            `json:"TaxMonth,omitempty"`
	TaxYear                *int32                                            `json:"TaxYear,omitempty"`
	Timestamp              *time.Time                                        `json:"Timestamp,omitempty"`
	Transmit               *bool                                             `json:"Transmit,omitempty"`
}

type RtiJobInstruction struct {
	RtiJobInstruction *RtiJobInstructionRtiJobInstruction `json:"RtiJobInstruction,omitempty"`
}
