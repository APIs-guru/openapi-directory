package shared

import (
	"time"
)

type TflAPIPresentationEntitiesValidityPeriod struct {
	FromDate *time.Time `json:"fromDate,omitempty"`
	IsNow    *bool      `json:"isNow,omitempty"`
	ToDate   *time.Time `json:"toDate,omitempty"`
}
