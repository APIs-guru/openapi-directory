package shared

import (
	"time"
)

// TflAPIPresentationEntitiesValidityPeriod
// Represents a period for which a planned works is valid.
type TflAPIPresentationEntitiesValidityPeriod struct {
	FromDate *time.Time `json:"fromDate,omitempty"`
	IsNow    *bool      `json:"isNow,omitempty"`
	ToDate   *time.Time `json:"toDate,omitempty"`
}
