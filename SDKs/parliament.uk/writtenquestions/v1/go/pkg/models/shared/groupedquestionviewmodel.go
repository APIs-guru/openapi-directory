package shared

import (
	"time"
)

type GroupedQuestionViewModel struct {
	DateTabled  *time.Time `json:"dateTabled"`
	QuestionUin *string    `json:"questionUin"`
}
