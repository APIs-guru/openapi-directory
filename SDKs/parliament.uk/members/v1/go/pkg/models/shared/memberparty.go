package shared

import (
"time")

type MemberParty struct {
    EndDate *time.Time `json:"endDate,omitempty"`
    Party *Party `json:"party,omitempty"`
    StartDate *time.Time `json:"startDate,omitempty"`
    
}

