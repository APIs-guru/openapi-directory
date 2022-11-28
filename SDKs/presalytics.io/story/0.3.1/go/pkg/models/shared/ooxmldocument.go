package shared

import (
	"time"
)

// OoxmlDocument
// A reference to an Ooxml Automation Document from the Presalytics Ooxml Automation API
type OoxmlDocument struct {
	CreatedAt                 *time.Time `json:"created_at,omitempty"`
	CreatedBy                 *string    `json:"created_by,omitempty"`
	DeleteTargetOnStoryDelete *bool      `json:"delete_target_on_story_delete,omitempty"`
	ID                        *string    `json:"id,omitempty"`
	OoxmlAutomationID         *string    `json:"ooxml_automation_id,omitempty"`
	StoryID                   *string    `json:"story_id,omitempty"`
	UpdatedAt                 *time.Time `json:"updated_at,omitempty"`
	UpdatedBy                 *string    `json:"updated_by,omitempty"`
}
