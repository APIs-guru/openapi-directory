package shared

import (
	"time"
)

type FlexV1WebChannel struct {
	AccountSid  *string    `json:"account_sid"`
	DateCreated *time.Time `json:"date_created"`
	DateUpdated *time.Time `json:"date_updated"`
	FlexFlowSid *string    `json:"flex_flow_sid"`
	Sid         *string    `json:"sid"`
	URL         *string    `json:"url"`
}
