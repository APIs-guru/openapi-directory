package shared

import (
	"time"
)

type FlexV1Channel struct {
	AccountSid  *string    `json:"account_sid"`
	DateCreated *time.Time `json:"date_created"`
	DateUpdated *time.Time `json:"date_updated"`
	FlexFlowSid *string    `json:"flex_flow_sid"`
	Sid         *string    `json:"sid"`
	TaskSid     *string    `json:"task_sid"`
	URL         *string    `json:"url"`
	UserSid     *string    `json:"user_sid"`
}
