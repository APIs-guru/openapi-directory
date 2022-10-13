package shared

import (
	"time"
)

type StudioV1FlowEngagementStep struct {
	AccountSid       *string                `json:"account_sid"`
	Context          *interface{}           `json:"context"`
	DateCreated      *time.Time             `json:"date_created"`
	DateUpdated      *time.Time             `json:"date_updated"`
	EngagementSid    *string                `json:"engagement_sid"`
	FlowSid          *string                `json:"flow_sid"`
	Links            map[string]interface{} `json:"links"`
	Name             *string                `json:"name"`
	Sid              *string                `json:"sid"`
	TransitionedFrom *string                `json:"transitioned_from"`
	TransitionedTo   *string                `json:"transitioned_to"`
	URL              *string                `json:"url"`
}
