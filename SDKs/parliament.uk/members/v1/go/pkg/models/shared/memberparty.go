package shared

import (
	"time"
)

type MemberParty struct {
	EndDate   *time.Time `json:"endDate"`
	Party     *Party     `json:"party"`
	StartDate *time.Time `json:"startDate"`
}
