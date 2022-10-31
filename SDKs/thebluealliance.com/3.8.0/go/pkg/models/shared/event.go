package shared

import (
"time")

type Event struct {
    Address *string `json:"address,omitempty"`
    City *string `json:"city,omitempty"`
    Country *string `json:"country,omitempty"`
    District *DistrictList `json:"district,omitempty"`
    DivisionKeys []string `json:"division_keys,omitempty"`
    EndDate time.Time `json:"end_date"`
    EventCode string `json:"event_code"`
    EventType int64 `json:"event_type"`
    EventTypeString string `json:"event_type_string"`
    FirstEventCode *string `json:"first_event_code,omitempty"`
    FirstEventID *string `json:"first_event_id,omitempty"`
    GmapsPlaceID *string `json:"gmaps_place_id,omitempty"`
    GmapsURL *string `json:"gmaps_url,omitempty"`
    Key string `json:"key"`
    Lat *float64 `json:"lat,omitempty"`
    Lng *float64 `json:"lng,omitempty"`
    LocationName *string `json:"location_name,omitempty"`
    Name string `json:"name"`
    ParentEventKey *string `json:"parent_event_key,omitempty"`
    PlayoffType *int64 `json:"playoff_type,omitempty"`
    PlayoffTypeString *string `json:"playoff_type_string,omitempty"`
    PostalCode *string `json:"postal_code,omitempty"`
    ShortName *string `json:"short_name,omitempty"`
    StartDate time.Time `json:"start_date"`
    StateProv *string `json:"state_prov,omitempty"`
    Timezone *string `json:"timezone,omitempty"`
    Webcasts []Webcast `json:"webcasts,omitempty"`
    Website *string `json:"website,omitempty"`
    Week *int64 `json:"week,omitempty"`
    Year int64 `json:"year"`
    
}

