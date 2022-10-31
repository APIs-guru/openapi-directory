package shared

import (
"time")

type GroupNotice struct {
    Content *string `json:"content,omitempty"`
    Date *time.Time `json:"date,omitempty"`
    GroupID *string `json:"group_id,omitempty"`
    NoticeID *string `json:"notice_id,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

