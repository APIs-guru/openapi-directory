package shared

import (
	"time"
)

type RoutesV2SipDomain struct {
	AccountSid   *string    `json:"account_sid"`
	DateCreated  *time.Time `json:"date_created"`
	DateUpdated  *time.Time `json:"date_updated"`
	FriendlyName *string    `json:"friendly_name"`
	Sid          *string    `json:"sid"`
	SipDomain    *string    `json:"sip_domain"`
	URL          *string    `json:"url"`
	VoiceRegion  *string    `json:"voice_region"`
}
