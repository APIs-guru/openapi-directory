package shared

import (
	"time"
)

type TrunkingV1TrunkOriginationURL struct {
	AccountSid   *string    `json:"account_sid"`
	DateCreated  *time.Time `json:"date_created"`
	DateUpdated  *time.Time `json:"date_updated"`
	Enabled      *bool      `json:"enabled"`
	FriendlyName *string    `json:"friendly_name"`
	Priority     *int64     `json:"priority"`
	Sid          *string    `json:"sid"`
	SipURL       *string    `json:"sip_url"`
	TrunkSid     *string    `json:"trunk_sid"`
	URL          *string    `json:"url"`
	Weight       *int64     `json:"weight"`
}
