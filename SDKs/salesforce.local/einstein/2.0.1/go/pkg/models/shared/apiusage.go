package shared

import (
	"time"
)

type APIUsage struct {
	EndsAt          *time.Time `json:"endsAt,omitempty"`
	ID              *string    `json:"id,omitempty"`
	LicenseID       *string    `json:"licenseId,omitempty"`
	Object          *string    `json:"object,omitempty"`
	OrganizationID  *string    `json:"organizationId,omitempty"`
	PlanData        []PlanData `json:"planData,omitempty"`
	PredictionsMax  *int64     `json:"predictionsMax,omitempty"`
	PredictionsUsed *int64     `json:"predictionsUsed,omitempty"`
	StartsAt        *time.Time `json:"startsAt,omitempty"`
}
