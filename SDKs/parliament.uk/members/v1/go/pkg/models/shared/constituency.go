package shared

import (
"time")

type Constituency struct {
    CurrentRepresentation *ConstituencyRepresentation `json:"currentRepresentation,omitempty"`
    EndDate *time.Time `json:"endDate,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    StartDate *time.Time `json:"startDate,omitempty"`
    
}

