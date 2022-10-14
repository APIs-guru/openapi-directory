package shared

import (
	"time"
)

type PayInstructionPayInstructionPayInstruction struct {
	Description *string    `json:"Description,omitempty"`
	EndDate     *time.Time `json:"EndDate,omitempty"`
	PayLineTag  *string    `json:"PayLineTag,omitempty"`
	StartDate   *time.Time `json:"StartDate,omitempty"`
}

type PayInstruction struct {
	PayInstruction *PayInstructionPayInstructionPayInstruction `json:"PayInstruction,omitempty"`
}
