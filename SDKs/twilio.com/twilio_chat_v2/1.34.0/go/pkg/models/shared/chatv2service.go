package shared

import (
	"time"
)

type ChatV2Service struct {
	AccountSid                   *string                `json:"account_sid"`
	ConsumptionReportInterval    *int64                 `json:"consumption_report_interval"`
	DateCreated                  *time.Time             `json:"date_created"`
	DateUpdated                  *time.Time             `json:"date_updated"`
	DefaultChannelCreatorRoleSid *string                `json:"default_channel_creator_role_sid"`
	DefaultChannelRoleSid        *string                `json:"default_channel_role_sid"`
	DefaultServiceRoleSid        *string                `json:"default_service_role_sid"`
	FriendlyName                 *string                `json:"friendly_name"`
	Limits                       *interface{}           `json:"limits"`
	Links                        map[string]interface{} `json:"links"`
	Media                        *interface{}           `json:"media"`
	Notifications                *interface{}           `json:"notifications"`
	PostWebhookRetryCount        *int64                 `json:"post_webhook_retry_count"`
	PostWebhookURL               *string                `json:"post_webhook_url"`
	PreWebhookRetryCount         *int64                 `json:"pre_webhook_retry_count"`
	PreWebhookURL                *string                `json:"pre_webhook_url"`
	ReachabilityEnabled          *bool                  `json:"reachability_enabled"`
	ReadStatusEnabled            *bool                  `json:"read_status_enabled"`
	Sid                          *string                `json:"sid"`
	TypingIndicatorTimeout       *int64                 `json:"typing_indicator_timeout"`
	URL                          *string                `json:"url"`
	WebhookFilters               []string               `json:"webhook_filters"`
	WebhookMethod                *string                `json:"webhook_method"`
}
