package shared

import (
	"time"
)

type GroupNotice struct {
	Content  *string    `json:"content"`
	Date     *time.Time `json:"date"`
	GroupID  *string    `json:"group_id"`
	NoticeID *string    `json:"notice_id"`
	Title    *string    `json:"title"`
}
