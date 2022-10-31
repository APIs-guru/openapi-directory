package shared

import (
	"time"
)

type Statement struct {
	EndBalance         *EndBalance     `json:"endBalance,omitempty"`
	EndDate            *time.Time      `json:"endDate,omitempty"`
	Errors             []Error         `json:"errors,omitempty"`
	FeedConnectionID   *string         `json:"feedConnectionId,omitempty"`
	ID                 *string         `json:"id,omitempty"`
	StartBalance       *StartBalance   `json:"startBalance,omitempty"`
	StartDate          *time.Time      `json:"startDate,omitempty"`
	StatementLineCount *int64          `json:"statementLineCount,omitempty"`
	StatementLines     []StatementLine `json:"statementLines,omitempty"`
	Status             *interface{}    `json:"status,omitempty"`
}
