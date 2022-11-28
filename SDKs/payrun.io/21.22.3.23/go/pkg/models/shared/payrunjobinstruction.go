package shared

import (
	"time"
)

// PayRunJobInstructionPayRunJobInstructionEmployee
// The pay run job instructions' employees
type PayRunJobInstructionPayRunJobInstructionEmployee struct {
	Employee []interface{} `json:"Employee,omitempty"`
}

// PayRunJobInstructionPayRunJobInstructionPaySchedule
// The pay run job instructions' pay schedule
type PayRunJobInstructionPayRunJobInstructionPaySchedule struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type PayRunJobInstructionPayRunJobInstruction struct {
	Employees       *PayRunJobInstructionPayRunJobInstructionEmployee    `json:"Employees,omitempty"`
	EndDate         *time.Time                                           `json:"EndDate,omitempty"`
	HoldingDate     *time.Time                                           `json:"HoldingDate,omitempty"`
	IsSupplementary *bool                                                `json:"IsSupplementary,omitempty"`
	PaySchedule     *PayRunJobInstructionPayRunJobInstructionPaySchedule `json:"PaySchedule,omitempty"`
	PaymentDate     *time.Time                                           `json:"PaymentDate,omitempty"`
	StartDate       *time.Time                                           `json:"StartDate,omitempty"`
}

type PayRunJobInstruction struct {
	PayRunJobInstruction *PayRunJobInstructionPayRunJobInstruction `json:"PayRunJobInstruction,omitempty"`
}
