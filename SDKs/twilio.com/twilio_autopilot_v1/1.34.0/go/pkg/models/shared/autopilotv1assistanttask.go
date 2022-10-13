package shared

import (
	"time"
)

type AutopilotV1AssistantTask struct {
	AccountSid   *string                `json:"account_sid"`
	ActionsURL   *string                `json:"actions_url"`
	AssistantSid *string                `json:"assistant_sid"`
	DateCreated  *time.Time             `json:"date_created"`
	DateUpdated  *time.Time             `json:"date_updated"`
	FriendlyName *string                `json:"friendly_name"`
	Links        map[string]interface{} `json:"links"`
	Sid          *string                `json:"sid"`
	UniqueName   *string                `json:"unique_name"`
	URL          *string                `json:"url"`
}
