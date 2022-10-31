package shared

import (
	"time"
)

type Story struct {
	Collaborators  []StoryCollaborator   `json:"collaborators,omitempty"`
	CreatedAt      *time.Time            `json:"created_at,omitempty"`
	CreatedBy      *string               `json:"created_by,omitempty"`
	ID             *string               `json:"id,omitempty"`
	IsPublic       *bool                 `json:"is_public,omitempty"`
	OoxmlDocuments []OoxmlDocument       `json:"ooxml_documents,omitempty"`
	Outline        *string               `json:"outline,omitempty"`
	OutlineHistory []StoryOutlineHistory `json:"outline_history,omitempty"`
	Revision       *int64                `json:"revision,omitempty"`
	Title          *string               `json:"title,omitempty"`
	UpdatedAt      *time.Time            `json:"updated_at,omitempty"`
	UpdatedBy      *string               `json:"updated_by,omitempty"`
}
