package shared

import (
	"time"
)

type Story struct {
	Collaborators  []StoryCollaborator   `json:"collaborators"`
	CreatedAt      *time.Time            `json:"created_at"`
	CreatedBy      *string               `json:"created_by"`
	ID             *string               `json:"id"`
	IsPublic       *bool                 `json:"is_public"`
	OoxmlDocuments []OoxmlDocument       `json:"ooxml_documents"`
	Outline        *string               `json:"outline"`
	OutlineHistory []StoryOutlineHistory `json:"outline_history"`
	Revision       *int64                `json:"revision"`
	Title          *string               `json:"title"`
	UpdatedAt      *time.Time            `json:"updated_at"`
	UpdatedBy      *string               `json:"updated_by"`
}
