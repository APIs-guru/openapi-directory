package shared

import (
	"time"
)

type PreviewUnderstandAssistantTaskSample struct {
	AccountSid    *string    `json:"account_sid"`
	AssistantSid  *string    `json:"assistant_sid"`
	DateCreated   *time.Time `json:"date_created"`
	DateUpdated   *time.Time `json:"date_updated"`
	Language      *string    `json:"language"`
	Sid           *string    `json:"sid"`
	SourceChannel *string    `json:"source_channel"`
	TaggedText    *string    `json:"tagged_text"`
	TaskSid       *string    `json:"task_sid"`
	URL           *string    `json:"url"`
}
