package shared

import (
	"time"
)

type SyncV1Service struct {
	AccountSid                    *string                `json:"account_sid"`
	ACLEnabled                    *bool                  `json:"acl_enabled"`
	DateCreated                   *time.Time             `json:"date_created"`
	DateUpdated                   *time.Time             `json:"date_updated"`
	FriendlyName                  *string                `json:"friendly_name"`
	Links                         map[string]interface{} `json:"links"`
	ReachabilityDebouncingEnabled *bool                  `json:"reachability_debouncing_enabled"`
	ReachabilityDebouncingWindow  *int64                 `json:"reachability_debouncing_window"`
	ReachabilityWebhooksEnabled   *bool                  `json:"reachability_webhooks_enabled"`
	Sid                           *string                `json:"sid"`
	UniqueName                    *string                `json:"unique_name"`
	URL                           *string                `json:"url"`
	WebhookURL                    *string                `json:"webhook_url"`
	WebhooksFromRestEnabled       *bool                  `json:"webhooks_from_rest_enabled"`
}
