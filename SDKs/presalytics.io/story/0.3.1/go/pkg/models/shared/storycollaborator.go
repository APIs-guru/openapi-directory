package shared

import (
	"time"
)

type StoryCollaborator struct {
	Active           *bool           `json:"active"`
	CreatedAt        *time.Time      `json:"created_at"`
	CreatedBy        *string         `json:"created_by"`
	Email            *string         `json:"email"`
	ID               *string         `json:"id"`
	LeadID           *int32          `json:"lead_id"`
	Name             *string         `json:"name"`
	PermissionType   *PermissionType `json:"permission_type"`
	PermissionTypeID *string         `json:"permission_type_id"`
	StoryID          *string         `json:"story_id"`
	UpdatedAt        *time.Time      `json:"updated_at"`
	UpdatedBy        *string         `json:"updated_by"`
	UserID           *string         `json:"user_id"`
}
