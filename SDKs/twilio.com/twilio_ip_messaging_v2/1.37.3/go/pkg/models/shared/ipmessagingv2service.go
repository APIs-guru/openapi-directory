package shared

import (
	"time"
)

type IPMessagingV2Service struct {
	AccountSid                   *string                `json:"account_sid,omitempty"`
	ConsumptionReportInterval    *int64                 `json:"consumption_report_interval,omitempty"`
	DateCreated                  *time.Time             `json:"date_created,omitempty"`
	DateUpdated                  *time.Time             `json:"date_updated,omitempty"`
	DefaultChannelCreatorRoleSid *string                `json:"default_channel_creator_role_sid,omitempty"`
	DefaultChannelRoleSid        *string                `json:"default_channel_role_sid,omitempty"`
	DefaultServiceRoleSid        *string                `json:"default_service_role_sid,omitempty"`
	FriendlyName                 *string                `json:"friendly_name,omitempty"`
	Limits                       *interface{}           `json:"limits,omitempty"`
	Links                        map[string]interface{} `json:"links,omitempty"`
	Media                        *interface{}           `json:"media,omitempty"`
	Notifications                *interface{}           `json:"notifications,omitempty"`
	PostWebhookRetryCount        *int64                 `json:"post_webhook_retry_count,omitempty"`
	PostWebhookURL               *string                `json:"post_webhook_url,omitempty"`
	PreWebhookRetryCount         *int64                 `json:"pre_webhook_retry_count,omitempty"`
	PreWebhookURL                *string                `json:"pre_webhook_url,omitempty"`
	ReachabilityEnabled          *bool                  `json:"reachability_enabled,omitempty"`
	ReadStatusEnabled            *bool                  `json:"read_status_enabled,omitempty"`
	Sid                          *string                `json:"sid,omitempty"`
	TypingIndicatorTimeout       *int64                 `json:"typing_indicator_timeout,omitempty"`
	URL                          *string                `json:"url,omitempty"`
	WebhookFilters               []string               `json:"webhook_filters,omitempty"`
	WebhookMethod                *string                `json:"webhook_method,omitempty"`
}
