package shared

import (
	"time"
)

type StoryOutlineHistory struct {
	CollaboratorUserID *string    `json:"collaborator_user_id"`
	CreatedAt          *time.Time `json:"created_at"`
	CreatedBy          *string    `json:"created_by"`
	ID                 *string    `json:"id"`
	Outline            *string    `json:"outline"`
	RevisionNumber     *int64     `json:"revision_number"`
	StoryID            *string    `json:"story_id"`
	UpdatedAt          *time.Time `json:"updated_at"`
	UpdatedBy          *string    `json:"updated_by"`
}
