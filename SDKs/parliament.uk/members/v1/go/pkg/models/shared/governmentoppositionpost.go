package shared

import (
	"time"
)

type GovernmentOppositionPost struct {
	CreatedWhen           *time.Time                       `json:"createdWhen"`
	GovernmentDepartments []GovernmentDepartment           `json:"governmentDepartments"`
	HansardName           *string                          `json:"hansardName"`
	ID                    *int32                           `json:"id"`
	Name                  *string                          `json:"name"`
	Order                 *int32                           `json:"order"`
	PostHolders           []GovernmentOppositionPostHolder `json:"postHolders"`
	Type                  *int32                           `json:"type"`
}
