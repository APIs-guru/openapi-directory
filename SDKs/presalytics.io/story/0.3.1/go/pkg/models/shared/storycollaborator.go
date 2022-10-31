package shared

import (
	"time"
)

type StoryCollaborator struct {
	Active           *bool           `json:"active,omitempty"`
	CreatedAt        *time.Time      `json:"created_at,omitempty"`
	CreatedBy        *string         `json:"created_by,omitempty"`
	Email            *string         `json:"email,omitempty"`
	ID               *string         `json:"id,omitempty"`
	LeadID           *int32          `json:"lead_id,omitempty"`
	Name             *string         `json:"name,omitempty"`
	PermissionType   *PermissionType `json:"permission_type,omitempty"`
	PermissionTypeID *string         `json:"permission_type_id,omitempty"`
	StoryID          *string         `json:"story_id,omitempty"`
	UpdatedAt        *time.Time      `json:"updated_at,omitempty"`
	UpdatedBy        *string         `json:"updated_by,omitempty"`
	UserID           *string         `json:"user_id,omitempty"`
}
