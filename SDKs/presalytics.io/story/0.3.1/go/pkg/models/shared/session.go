package shared

import (
	"time"
)

type Session struct {
	Collaborator    *StoryCollaborator `json:"collaborator"`
	CollaboratorID  *string            `json:"collaborator_id"`
	CreatedAt       *time.Time         `json:"created_at"`
	CreatedBy       *string            `json:"created_by"`
	Host            *string            `json:"host"`
	ID              *string            `json:"id"`
	OutlineRevision *int64             `json:"outline_revision"`
	UpdatedAt       *time.Time         `json:"updated_at"`
	UpdatedBy       *string            `json:"updated_by"`
	Views           []View             `json:"views"`
}
