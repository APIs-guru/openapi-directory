package shared

import (
	"time"
)

type PayRunJobInstructionPayRunJobInstructionEmployeesEmployee struct {
	Employee []interface{} `json:"Employee"`
}

type PayRunJobInstructionPayRunJobInstructionPaySchedulePaySchedule struct {
	AtHref  *string `json:"@href"`
	AtRel   *string `json:"@rel"`
	AtTitle *string `json:"@title"`
}

type PayRunJobInstructionPayRunJobInstructionPayRunJobInstruction struct {
	Employees       *PayRunJobInstructionPayRunJobInstructionEmployeesEmployee      `json:"Employees"`
	EndDate         *time.Time                                                      `json:"EndDate"`
	HoldingDate     *time.Time                                                      `json:"HoldingDate"`
	IsSupplementary *bool                                                           `json:"IsSupplementary"`
	PaySchedule     *PayRunJobInstructionPayRunJobInstructionPaySchedulePaySchedule `json:"PaySchedule"`
	PaymentDate     *time.Time                                                      `json:"PaymentDate"`
	StartDate       *time.Time                                                      `json:"StartDate"`
}

type PayRunJobInstruction struct {
	PayRunJobInstruction *PayRunJobInstructionPayRunJobInstructionPayRunJobInstruction `json:"PayRunJobInstruction"`
}
