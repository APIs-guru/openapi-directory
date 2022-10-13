package shared

import (
	"time"
)

type PayInstructionPayInstructionPayInstruction struct {
	Description *string    `json:"Description"`
	EndDate     *time.Time `json:"EndDate"`
	PayLineTag  *string    `json:"PayLineTag"`
	StartDate   *time.Time `json:"StartDate"`
}

type PayInstruction struct {
	PayInstruction *PayInstructionPayInstructionPayInstruction `json:"PayInstruction"`
}
