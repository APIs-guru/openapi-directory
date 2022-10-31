package shared

import (
"time")

type V3Disruption struct {
    Colour *string `json:"colour,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayOnBoard *bool `json:"display_on_board,omitempty"`
    DisplayStatus *bool `json:"display_status,omitempty"`
    DisruptionID *int64 `json:"disruption_id,omitempty"`
    DisruptionStatus *string `json:"disruption_status,omitempty"`
    DisruptionType *string `json:"disruption_type,omitempty"`
    FromDate *time.Time `json:"from_date,omitempty"`
    LastUpdated *time.Time `json:"last_updated,omitempty"`
    PublishedOn *time.Time `json:"published_on,omitempty"`
    Routes []V3DisruptionRoute `json:"routes,omitempty"`
    Stops []V3DisruptionStop `json:"stops,omitempty"`
    Title *string `json:"title,omitempty"`
    ToDate *time.Time `json:"to_date,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

