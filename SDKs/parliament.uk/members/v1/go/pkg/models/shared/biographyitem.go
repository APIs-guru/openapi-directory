package shared

import (
	"time"
)

type BiographyItem struct {
	AdditionalInfo     *string    `json:"additionalInfo"`
	AdditionalInfoLink *string    `json:"additionalInfoLink"`
	EndDate            *time.Time `json:"endDate"`
	House              *int32     `json:"house"`
	ID                 *int32     `json:"id"`
	Name               *string    `json:"name"`
	StartDate          *time.Time `json:"startDate"`
}
