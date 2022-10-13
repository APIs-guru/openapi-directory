package shared

import (
	"time"
)

type StudioV1FlowEngagement struct {
	AccountSid            *string                   `json:"account_sid"`
	ContactChannelAddress *string                   `json:"contact_channel_address"`
	ContactSid            *string                   `json:"contact_sid"`
	Context               *interface{}              `json:"context"`
	DateCreated           *time.Time                `json:"date_created"`
	DateUpdated           *time.Time                `json:"date_updated"`
	FlowSid               *string                   `json:"flow_sid"`
	Links                 map[string]interface{}    `json:"links"`
	Sid                   *string                   `json:"sid"`
	Status                *EngagementEnumStatusEnum `json:"status"`
	URL                   *string                   `json:"url"`
}
