package shared

import (
	"time"
)

type FlexV1Channel struct {
	AccountSid  *string    `json:"account_sid,omitempty"`
	DateCreated *time.Time `json:"date_created,omitempty"`
	DateUpdated *time.Time `json:"date_updated,omitempty"`
	FlexFlowSid *string    `json:"flex_flow_sid,omitempty"`
	Sid         *string    `json:"sid,omitempty"`
	TaskSid     *string    `json:"task_sid,omitempty"`
	URL         *string    `json:"url,omitempty"`
	UserSid     *string    `json:"user_sid,omitempty"`
}
