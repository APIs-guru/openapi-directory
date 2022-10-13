package shared

import (
	"time"
)

type EventSimple struct {
	City      *string       `json:"city"`
	Country   *string       `json:"country"`
	District  *DistrictList `json:"district"`
	EndDate   time.Time     `json:"end_date"`
	EventCode string        `json:"event_code"`
	EventType int64         `json:"event_type"`
	Key       string        `json:"key"`
	Name      string        `json:"name"`
	StartDate time.Time     `json:"start_date"`
	StateProv *string       `json:"state_prov"`
	Year      int64         `json:"year"`
}
