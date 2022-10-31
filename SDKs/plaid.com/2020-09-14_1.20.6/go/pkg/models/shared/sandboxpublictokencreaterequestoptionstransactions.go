package shared

import (
	"time"
)

type SandboxPublicTokenCreateRequestOptionsTransactions struct {
	EndDate   *time.Time `json:"end_date,omitempty"`
	StartDate *time.Time `json:"start_date,omitempty"`
}
