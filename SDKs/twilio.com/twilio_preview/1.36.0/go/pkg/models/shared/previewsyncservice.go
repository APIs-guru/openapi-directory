package shared

import (
	"time"
)

type PreviewSyncService struct {
	AccountSid                  *string                `json:"account_sid,omitempty"`
	ACLEnabled                  *bool                  `json:"acl_enabled,omitempty"`
	DateCreated                 *time.Time             `json:"date_created,omitempty"`
	DateUpdated                 *time.Time             `json:"date_updated,omitempty"`
	FriendlyName                *string                `json:"friendly_name,omitempty"`
	Links                       map[string]interface{} `json:"links,omitempty"`
	ReachabilityWebhooksEnabled *bool                  `json:"reachability_webhooks_enabled,omitempty"`
	Sid                         *string                `json:"sid,omitempty"`
	URL                         *string                `json:"url,omitempty"`
	WebhookURL                  *string                `json:"webhook_url,omitempty"`
}
