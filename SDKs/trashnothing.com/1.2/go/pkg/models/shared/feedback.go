package shared

import (
"time")

type Feedback struct {
    Content *string `json:"content,omitempty"`
    Date *time.Time `json:"date,omitempty"`
    Positive *bool `json:"positive,omitempty"`
    ReviewerUserID *string `json:"reviewer_user_id,omitempty"`
    UserID *string `json:"user_id,omitempty"`
    
}

