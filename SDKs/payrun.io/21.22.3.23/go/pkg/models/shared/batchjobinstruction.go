package shared

import (
	"time"
)

// BatchJobInstructionBatchJobInstructionDelete
// The batch job instructions' instructions
type BatchJobInstructionBatchJobInstructionDelete struct {
	Delete []interface{} `json:"DELETE,omitempty"`
}

type BatchJobInstructionBatchJobInstruction struct {
	HoldingDate  *time.Time                                    `json:"HoldingDate,omitempty"`
	Instructions *BatchJobInstructionBatchJobInstructionDelete `json:"Instructions,omitempty"`
	ValidateOnly *bool                                         `json:"ValidateOnly,omitempty"`
}

type BatchJobInstruction struct {
	BatchJobInstruction *BatchJobInstructionBatchJobInstruction `json:"BatchJobInstruction,omitempty"`
}
