package shared

import (
	"time"
)

type AutopilotV1AssistantQuery struct {
	AccountSid    *string      `json:"account_sid"`
	AssistantSid  *string      `json:"assistant_sid"`
	DateCreated   *time.Time   `json:"date_created"`
	DateUpdated   *time.Time   `json:"date_updated"`
	DialogueSid   *string      `json:"dialogue_sid"`
	Language      *string      `json:"language"`
	ModelBuildSid *string      `json:"model_build_sid"`
	Query         *string      `json:"query"`
	Results       *interface{} `json:"results"`
	SampleSid     *string      `json:"sample_sid"`
	Sid           *string      `json:"sid"`
	SourceChannel *string      `json:"source_channel"`
	Status        *string      `json:"status"`
	URL           *string      `json:"url"`
}
