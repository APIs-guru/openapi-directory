package shared

import (
	"time"
)

type VerifyV2ServiceWebhook struct {
	AccountSid    *string                 `json:"account_sid"`
	DateCreated   *time.Time              `json:"date_created"`
	DateUpdated   *time.Time              `json:"date_updated"`
	EventTypes    []string                `json:"event_types"`
	FriendlyName  *string                 `json:"friendly_name"`
	ServiceSid    *string                 `json:"service_sid"`
	Sid           *string                 `json:"sid"`
	Status        *WebhookEnumStatusEnum  `json:"status"`
	URL           *string                 `json:"url"`
	Version       *WebhookEnumVersionEnum `json:"version"`
	WebhookMethod *WebhookEnumMethodsEnum `json:"webhook_method"`
	WebhookURL    *string                 `json:"webhook_url"`
}
