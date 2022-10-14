package shared

import (
	"time"
)

type PayRunJobInstructionPayRunJobInstructionEmployeesEmployee struct {
	Employee []interface{} `json:"Employee,omitempty"`
}

type PayRunJobInstructionPayRunJobInstructionPaySchedulePaySchedule struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type PayRunJobInstructionPayRunJobInstructionPayRunJobInstruction struct {
	Employees       *PayRunJobInstructionPayRunJobInstructionEmployeesEmployee      `json:"Employees,omitempty"`
	EndDate         *time.Time                                                      `json:"EndDate,omitempty"`
	HoldingDate     *time.Time                                                      `json:"HoldingDate,omitempty"`
	IsSupplementary *bool                                                           `json:"IsSupplementary,omitempty"`
	PaySchedule     *PayRunJobInstructionPayRunJobInstructionPaySchedulePaySchedule `json:"PaySchedule,omitempty"`
	PaymentDate     *time.Time                                                      `json:"PaymentDate,omitempty"`
	StartDate       *time.Time                                                      `json:"StartDate,omitempty"`
}

type PayRunJobInstruction struct {
	PayRunJobInstruction *PayRunJobInstructionPayRunJobInstructionPayRunJobInstruction `json:"PayRunJobInstruction,omitempty"`
}
