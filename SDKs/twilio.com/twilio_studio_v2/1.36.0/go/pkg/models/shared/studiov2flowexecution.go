package shared

import (
	"time"
)

type StudioV2FlowExecution struct {
	AccountSid            *string                  `json:"account_sid"`
	ContactChannelAddress *string                  `json:"contact_channel_address"`
	Context               *interface{}             `json:"context"`
	DateCreated           *time.Time               `json:"date_created"`
	DateUpdated           *time.Time               `json:"date_updated"`
	FlowSid               *string                  `json:"flow_sid"`
	Links                 map[string]interface{}   `json:"links"`
	Sid                   *string                  `json:"sid"`
	Status                *ExecutionEnumStatusEnum `json:"status"`
	URL                   *string                  `json:"url"`
}
