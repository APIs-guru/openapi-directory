package shared

import (
	"time"
)

type PermissionType struct {
	CanAddCollaborators *bool      `json:"can_add_collaborators,omitempty"`
	CanDelete           *bool      `json:"can_delete,omitempty"`
	CanEdit             *bool      `json:"can_edit,omitempty"`
	CanView             *bool      `json:"can_view,omitempty"`
	CreatedAt           *time.Time `json:"created_at,omitempty"`
	CreatedBy           *string    `json:"created_by,omitempty"`
	ID                  *string    `json:"id,omitempty"`
	Name                *string    `json:"name,omitempty"`
	UpdatedAt           *time.Time `json:"updated_at,omitempty"`
	UpdatedBy           *string    `json:"updated_by,omitempty"`
}
