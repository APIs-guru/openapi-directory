package shared

import (
"time")

type PayInstructionPayInstruction struct {
    Description *string `json:"Description,omitempty"`
    EndDate *time.Time `json:"EndDate,omitempty"`
    PayLineTag *string `json:"PayLineTag,omitempty"`
    StartDate *time.Time `json:"StartDate,omitempty"`
    
}

type PayInstruction struct {
    PayInstruction *PayInstructionPayInstruction `json:"PayInstruction,omitempty"`
    
}

