package shared

import (
	"time"
)

type Session struct {
	Collaborator    *StoryCollaborator `json:"collaborator,omitempty"`
	CollaboratorID  *string            `json:"collaborator_id,omitempty"`
	CreatedAt       *time.Time         `json:"created_at,omitempty"`
	CreatedBy       *string            `json:"created_by,omitempty"`
	Host            *string            `json:"host,omitempty"`
	ID              *string            `json:"id,omitempty"`
	OutlineRevision *int64             `json:"outline_revision,omitempty"`
	UpdatedAt       *time.Time         `json:"updated_at,omitempty"`
	UpdatedBy       *string            `json:"updated_by,omitempty"`
	Views           []View             `json:"views,omitempty"`
}
