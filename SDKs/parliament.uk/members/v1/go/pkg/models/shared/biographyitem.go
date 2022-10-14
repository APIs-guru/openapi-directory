package shared

import (
	"time"
)

type BiographyItem struct {
	AdditionalInfo     *string    `json:"additionalInfo,omitempty"`
	AdditionalInfoLink *string    `json:"additionalInfoLink,omitempty"`
	EndDate            *time.Time `json:"endDate,omitempty"`
	House              *int32     `json:"house,omitempty"`
	ID                 *int32     `json:"id,omitempty"`
	Name               *string    `json:"name,omitempty"`
	StartDate          *time.Time `json:"startDate,omitempty"`
}
