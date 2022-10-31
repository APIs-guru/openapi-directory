package shared

import (
"time")

type StoryOutlineHistory struct {
    CollaboratorUserID *string `json:"collaborator_user_id,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    CreatedBy *string `json:"created_by,omitempty"`
    ID *string `json:"id,omitempty"`
    Outline *string `json:"outline,omitempty"`
    RevisionNumber *int64 `json:"revision_number,omitempty"`
    StoryID *string `json:"story_id,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    UpdatedBy *string `json:"updated_by,omitempty"`
    
}

