package shared

import (
	"time"
)

type OoxmlDocument struct {
	CreatedAt                 *time.Time `json:"created_at"`
	CreatedBy                 *string    `json:"created_by"`
	DeleteTargetOnStoryDelete *bool      `json:"delete_target_on_story_delete"`
	ID                        *string    `json:"id"`
	OoxmlAutomationID         *string    `json:"ooxml_automation_id"`
	StoryID                   *string    `json:"story_id"`
	UpdatedAt                 *time.Time `json:"updated_at"`
	UpdatedBy                 *string    `json:"updated_by"`
}
