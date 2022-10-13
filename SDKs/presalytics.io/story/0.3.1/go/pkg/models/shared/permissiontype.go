package shared

import (
	"time"
)

type PermissionType struct {
	CanAddCollaborators *bool      `json:"can_add_collaborators"`
	CanDelete           *bool      `json:"can_delete"`
	CanEdit             *bool      `json:"can_edit"`
	CanView             *bool      `json:"can_view"`
	CreatedAt           *time.Time `json:"created_at"`
	CreatedBy           *string    `json:"created_by"`
	ID                  *string    `json:"id"`
	Name                *string    `json:"name"`
	UpdatedAt           *time.Time `json:"updated_at"`
	UpdatedBy           *string    `json:"updated_by"`
}
