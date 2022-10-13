package shared

import (
	"time"
)

type RtiJobInstructionRtiJobInstructionEmployerEmployer struct {
	AtHref  *string `json:"@href"`
	AtRel   *string `json:"@rel"`
	AtTitle *string `json:"@title"`
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
	AtHref  *string `json:"@href"`
	AtRel   *string `json:"@rel"`
	AtTitle *string `json:"@title"`
}

type RtiJobInstructionRtiJobInstructionRtiTransactionRtiTransaction struct {
	AtHref  *string `json:"@href"`
	AtRel   *string `json:"@rel"`
	AtTitle *string `json:"@title"`
}

type RtiJobInstructionRtiJobInstructionRtiJobInstruction struct {
	EarlierTaxYear         *int32                                                          `json:"EarlierTaxYear"`
	Employer               *RtiJobInstructionRtiJobInstructionEmployerEmployer             `json:"Employer"`
	FinalSubmissionForYear *bool                                                           `json:"FinalSubmissionForYear"`
	Generate               *bool                                                           `json:"Generate"`
	HoldingDate            *time.Time                                                      `json:"HoldingDate"`
	LateReason             *RtiJobInstructionRtiJobInstructionLateReasonLateReasonEnum     `json:"LateReason"`
	NoPaymentForPeriodFrom *time.Time                                                      `json:"NoPaymentForPeriodFrom"`
	NoPaymentForPeriodTo   *time.Time                                                      `json:"NoPaymentForPeriodTo"`
	PaySchedule            *RtiJobInstructionRtiJobInstructionPaySchedulePaySchedule       `json:"PaySchedule"`
	PaymentDate            *time.Time                                                      `json:"PaymentDate"`
	PeriodOfInactivityFrom *time.Time                                                      `json:"PeriodOfInactivityFrom"`
	PeriodOfInactivityTo   *time.Time                                                      `json:"PeriodOfInactivityTo"`
	RtiTransaction         *RtiJobInstructionRtiJobInstructionRtiTransactionRtiTransaction `json:"RtiTransaction"`
	RtiType                *string                                                         `json:"RtiType"`
	SchemeCeased           *time.Time                                                      `json:"SchemeCeased"`
	TaxMonth               *int32                                                          `json:"TaxMonth"`
	TaxYear                *int32                                                          `json:"TaxYear"`
	Timestamp              *time.Time                                                      `json:"Timestamp"`
	Transmit               *bool                                                           `json:"Transmit"`
}

type RtiJobInstruction struct {
	RtiJobInstruction *RtiJobInstructionRtiJobInstructionRtiJobInstruction `json:"RtiJobInstruction"`
}
