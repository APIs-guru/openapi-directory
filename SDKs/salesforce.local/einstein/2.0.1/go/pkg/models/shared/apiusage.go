package shared

import (
	"time"
)

type APIUsage struct {
	EndsAt          *time.Time `json:"endsAt"`
	ID              *string    `json:"id"`
	LicenseID       *string    `json:"licenseId"`
	Object          *string    `json:"object"`
	OrganizationID  *string    `json:"organizationId"`
	PlanData        []PlanData `json:"planData"`
	PredictionsMax  *int64     `json:"predictionsMax"`
	PredictionsUsed *int64     `json:"predictionsUsed"`
	StartsAt        *time.Time `json:"startsAt"`
}
