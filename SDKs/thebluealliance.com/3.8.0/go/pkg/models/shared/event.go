package shared

import (
	"time"
)

type Event struct {
	Address           *string       `json:"address"`
	City              *string       `json:"city"`
	Country           *string       `json:"country"`
	District          *DistrictList `json:"district"`
	DivisionKeys      []string      `json:"division_keys"`
	EndDate           time.Time     `json:"end_date"`
	EventCode         string        `json:"event_code"`
	EventType         int64         `json:"event_type"`
	EventTypeString   string        `json:"event_type_string"`
	FirstEventCode    *string       `json:"first_event_code"`
	FirstEventID      *string       `json:"first_event_id"`
	GmapsPlaceID      *string       `json:"gmaps_place_id"`
	GmapsURL          *string       `json:"gmaps_url"`
	Key               string        `json:"key"`
	Lat               *float64      `json:"lat"`
	Lng               *float64      `json:"lng"`
	LocationName      *string       `json:"location_name"`
	Name              string        `json:"name"`
	ParentEventKey    *string       `json:"parent_event_key"`
	PlayoffType       *int64        `json:"playoff_type"`
	PlayoffTypeString *string       `json:"playoff_type_string"`
	PostalCode        *string       `json:"postal_code"`
	ShortName         *string       `json:"short_name"`
	StartDate         time.Time     `json:"start_date"`
	StateProv         *string       `json:"state_prov"`
	Timezone          *string       `json:"timezone"`
	Webcasts          []Webcast     `json:"webcasts"`
	Website           *string       `json:"website"`
	Week              *int64        `json:"week"`
	Year              int64         `json:"year"`
}
