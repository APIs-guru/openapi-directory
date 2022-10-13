package shared

import (
	"time"
)

type Constituency struct {
	CurrentRepresentation *ConstituencyRepresentation `json:"currentRepresentation"`
	EndDate               *time.Time                  `json:"endDate"`
	ID                    *int32                      `json:"id"`
	Name                  *string                     `json:"name"`
	StartDate             *time.Time                  `json:"startDate"`
}
