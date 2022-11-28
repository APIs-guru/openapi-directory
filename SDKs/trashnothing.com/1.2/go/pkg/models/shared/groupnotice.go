package shared

import (
	"time"
)

// GroupNotice
// Group notices are created by group moderators in order to provide useful information to the group members (eg. group rules and guidelines).
type GroupNotice struct {
	Content  *string    `json:"content,omitempty"`
	Date     *time.Time `json:"date,omitempty"`
	GroupID  *string    `json:"group_id,omitempty"`
	NoticeID *string    `json:"notice_id,omitempty"`
	Title    *string    `json:"title,omitempty"`
}
