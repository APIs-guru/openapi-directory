package shared

import (
	"time"
)

type SyncV1Service struct {
	AccountSid                    *string                `json:"account_sid,omitempty"`
	ACLEnabled                    *bool                  `json:"acl_enabled,omitempty"`
	DateCreated                   *time.Time             `json:"date_created,omitempty"`
	DateUpdated                   *time.Time             `json:"date_updated,omitempty"`
	FriendlyName                  *string                `json:"friendly_name,omitempty"`
	Links                         map[string]interface{} `json:"links,omitempty"`
	ReachabilityDebouncingEnabled *bool                  `json:"reachability_debouncing_enabled,omitempty"`
	ReachabilityDebouncingWindow  *int64                 `json:"reachability_debouncing_window,omitempty"`
	ReachabilityWebhooksEnabled   *bool                  `json:"reachability_webhooks_enabled,omitempty"`
	Sid                           *string                `json:"sid,omitempty"`
	UniqueName                    *string                `json:"unique_name,omitempty"`
	URL                           *string                `json:"url,omitempty"`
	WebhookURL                    *string                `json:"webhook_url,omitempty"`
	WebhooksFromRestEnabled       *bool                  `json:"webhooks_from_rest_enabled,omitempty"`
}
