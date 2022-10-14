package shared

import (
	"time"
)

type BatchJobInstructionBatchJobInstructionInstructionsDelete struct {
	Delete []interface{} `json:"DELETE,omitempty"`
}

type BatchJobInstructionBatchJobInstructionBatchJobInstruction struct {
	HoldingDate  *time.Time                                                `json:"HoldingDate,omitempty"`
	Instructions *BatchJobInstructionBatchJobInstructionInstructionsDelete `json:"Instructions,omitempty"`
	ValidateOnly *bool                                                     `json:"ValidateOnly,omitempty"`
}

type BatchJobInstruction struct {
	BatchJobInstruction *BatchJobInstructionBatchJobInstructionBatchJobInstruction `json:"BatchJobInstruction,omitempty"`
}
