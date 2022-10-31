package shared

import (
	"time"
)

type EventSimple struct {
	City      *string       `json:"city,omitempty"`
	Country   *string       `json:"country,omitempty"`
	District  *DistrictList `json:"district,omitempty"`
	EndDate   time.Time     `json:"end_date"`
	EventCode string        `json:"event_code"`
	EventType int64         `json:"event_type"`
	Key       string        `json:"key"`
	Name      string        `json:"name"`
	StartDate time.Time     `json:"start_date"`
	StateProv *string       `json:"state_prov,omitempty"`
	Year      int64         `json:"year"`
}
