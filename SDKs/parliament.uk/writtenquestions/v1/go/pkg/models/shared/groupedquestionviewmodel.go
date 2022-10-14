package shared

import (
	"time"
)

type GroupedQuestionViewModel struct {
	DateTabled  *time.Time `json:"dateTabled,omitempty"`
	QuestionUin *string    `json:"questionUin,omitempty"`
}
