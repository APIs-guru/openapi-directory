package shared

import (
	"time"
)

type GroupedQuestion struct {
	DateTabled  *time.Time `json:"dateTabled,omitempty"`
	QuestionUin *string    `json:"questionUin,omitempty"`
}
