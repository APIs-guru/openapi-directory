package shared

import (
	"time"
)

type GroupedQuestion struct {
	DateTabled  *time.Time `json:"dateTabled"`
	QuestionUin *string    `json:"questionUin"`
}
