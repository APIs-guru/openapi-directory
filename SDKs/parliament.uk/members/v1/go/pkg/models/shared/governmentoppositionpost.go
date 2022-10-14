package shared

import (
	"time"
)

type GovernmentOppositionPost struct {
	CreatedWhen           *time.Time                       `json:"createdWhen,omitempty"`
	GovernmentDepartments []GovernmentDepartment           `json:"governmentDepartments,omitempty"`
	HansardName           *string                          `json:"hansardName,omitempty"`
	ID                    *int32                           `json:"id,omitempty"`
	Name                  *string                          `json:"name,omitempty"`
	Order                 *int32                           `json:"order,omitempty"`
	PostHolders           []GovernmentOppositionPostHolder `json:"postHolders,omitempty"`
	Type                  *int32                           `json:"type,omitempty"`
}
