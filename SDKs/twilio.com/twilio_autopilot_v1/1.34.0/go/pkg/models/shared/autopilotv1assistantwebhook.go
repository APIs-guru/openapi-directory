package shared

import (
	"time"
)

type AutopilotV1AssistantWebhook struct {
	AccountSid    *string    `json:"account_sid"`
	AssistantSid  *string    `json:"assistant_sid"`
	DateCreated   *time.Time `json:"date_created"`
	DateUpdated   *time.Time `json:"date_updated"`
	Events        *string    `json:"events"`
	Sid           *string    `json:"sid"`
	UniqueName    *string    `json:"unique_name"`
	URL           *string    `json:"url"`
	WebhookMethod *string    `json:"webhook_method"`
	WebhookURL    *string    `json:"webhook_url"`
}
