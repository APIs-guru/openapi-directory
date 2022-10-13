package shared

import (
	"time"
)

type TflAPIPresentationEntitiesValidityPeriod struct {
	FromDate *time.Time `json:"fromDate"`
	IsNow    *bool      `json:"isNow"`
	ToDate   *time.Time `json:"toDate"`
}
