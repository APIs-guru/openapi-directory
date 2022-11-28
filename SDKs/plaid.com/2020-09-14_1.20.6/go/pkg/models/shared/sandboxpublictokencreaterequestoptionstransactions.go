package shared

import (
	"time"
)

// SandboxPublicTokenCreateRequestOptionsTransactions
// SandboxPublicTokenCreateRequestOptionsTransactions is an optional set of parameters corresponding to transactions options.
type SandboxPublicTokenCreateRequestOptionsTransactions struct {
	EndDate   *time.Time `json:"end_date,omitempty"`
	StartDate *time.Time `json:"start_date,omitempty"`
}
