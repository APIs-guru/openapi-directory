package shared

import (
	"time"
)

type PreviewUnderstandAssistantTaskField struct {
	AccountSid   *string    `json:"account_sid"`
	AssistantSid *string    `json:"assistant_sid"`
	DateCreated  *time.Time `json:"date_created"`
	DateUpdated  *time.Time `json:"date_updated"`
	FieldType    *string    `json:"field_type"`
	Sid          *string    `json:"sid"`
	TaskSid      *string    `json:"task_sid"`
	UniqueName   *string    `json:"unique_name"`
	URL          *string    `json:"url"`
}
