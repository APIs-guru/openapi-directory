package shared

import (
	"time"
)

type AutopilotV1AssistantTaskSample struct {
	AccountSid    *string    `json:"account_sid,omitempty"`
	AssistantSid  *string    `json:"assistant_sid,omitempty"`
	DateCreated   *time.Time `json:"date_created,omitempty"`
	DateUpdated   *time.Time `json:"date_updated,omitempty"`
	Language      *string    `json:"language,omitempty"`
	Sid           *string    `json:"sid,omitempty"`
	SourceChannel *string    `json:"source_channel,omitempty"`
	TaggedText    *string    `json:"tagged_text,omitempty"`
	TaskSid       *string    `json:"task_sid,omitempty"`
	URL           *string    `json:"url,omitempty"`
}
