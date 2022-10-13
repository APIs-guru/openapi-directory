package shared

import (
	"time"
)

type Statement struct {
	EndBalance         *EndBalance     `json:"endBalance"`
	EndDate            *time.Time      `json:"endDate"`
	Errors             []Error         `json:"errors"`
	FeedConnectionID   *string         `json:"feedConnectionId"`
	ID                 *string         `json:"id"`
	StartBalance       *StartBalance   `json:"startBalance"`
	StartDate          *time.Time      `json:"startDate"`
	StatementLineCount *int64          `json:"statementLineCount"`
	StatementLines     []StatementLine `json:"statementLines"`
	Status             *interface{}    `json:"status"`
}
