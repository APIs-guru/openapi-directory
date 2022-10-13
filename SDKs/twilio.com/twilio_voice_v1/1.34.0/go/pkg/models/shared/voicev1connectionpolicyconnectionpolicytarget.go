package shared

import (
	"time"
)

type VoiceV1ConnectionPolicyConnectionPolicyTarget struct {
	AccountSid          *string    `json:"account_sid"`
	ConnectionPolicySid *string    `json:"connection_policy_sid"`
	DateCreated         *time.Time `json:"date_created"`
	DateUpdated         *time.Time `json:"date_updated"`
	Enabled             *bool      `json:"enabled"`
	FriendlyName        *string    `json:"friendly_name"`
	Priority            *int64     `json:"priority"`
	Sid                 *string    `json:"sid"`
	Target              *string    `json:"target"`
	URL                 *string    `json:"url"`
	Weight              *int64     `json:"weight"`
}
