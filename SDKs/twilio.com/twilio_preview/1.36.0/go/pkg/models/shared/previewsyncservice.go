package shared

import (
	"time"
)

type PreviewSyncService struct {
	AccountSid                  *string                `json:"account_sid"`
	ACLEnabled                  *bool                  `json:"acl_enabled"`
	DateCreated                 *time.Time             `json:"date_created"`
	DateUpdated                 *time.Time             `json:"date_updated"`
	FriendlyName                *string                `json:"friendly_name"`
	Links                       map[string]interface{} `json:"links"`
	ReachabilityWebhooksEnabled *bool                  `json:"reachability_webhooks_enabled"`
	Sid                         *string                `json:"sid"`
	URL                         *string                `json:"url"`
	WebhookURL                  *string                `json:"webhook_url"`
}
