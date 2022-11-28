package shared

import (
	"time"
)

type StudioV1FlowEngagementStep struct {
	AccountSid       *string                `json:"account_sid,omitempty"`
	Context          *interface{}           `json:"context,omitempty"`
	DateCreated      *time.Time             `json:"date_created,omitempty"`
	DateUpdated      *time.Time             `json:"date_updated,omitempty"`
	EngagementSid    *string                `json:"engagement_sid,omitempty"`
	FlowSid          *string                `json:"flow_sid,omitempty"`
	Links            map[string]interface{} `json:"links,omitempty"`
	Name             *string                `json:"name,omitempty"`
	Sid              *string                `json:"sid,omitempty"`
	TransitionedFrom *string                `json:"transitioned_from,omitempty"`
	TransitionedTo   *string                `json:"transitioned_to,omitempty"`
	URL              *string                `json:"url,omitempty"`
}
