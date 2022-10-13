package shared

import (
	"time"
)

type BatchJobInstructionBatchJobInstructionInstructionsDelete struct {
	Delete []interface{} `json:"DELETE"`
}

type BatchJobInstructionBatchJobInstructionBatchJobInstruction struct {
	HoldingDate  *time.Time                                                `json:"HoldingDate"`
	Instructions *BatchJobInstructionBatchJobInstructionInstructionsDelete `json:"Instructions"`
	ValidateOnly *bool                                                     `json:"ValidateOnly"`
}

type BatchJobInstruction struct {
	BatchJobInstruction *BatchJobInstructionBatchJobInstructionBatchJobInstruction `json:"BatchJobInstruction"`
}
