package shared

import (
	"time"
)

type PreviewWirelessRatePlan struct {
	AccountSid             *string    `json:"account_sid"`
	DataEnabled            *bool      `json:"data_enabled"`
	DataLimit              *int64     `json:"data_limit"`
	DataMetering           *string    `json:"data_metering"`
	DateCreated            *time.Time `json:"date_created"`
	DateUpdated            *time.Time `json:"date_updated"`
	FriendlyName           *string    `json:"friendly_name"`
	InternationalRoaming   []string   `json:"international_roaming"`
	MessagingEnabled       *bool      `json:"messaging_enabled"`
	NationalRoamingEnabled *bool      `json:"national_roaming_enabled"`
	Sid                    *string    `json:"sid"`
	UniqueName             *string    `json:"unique_name"`
	URL                    *string    `json:"url"`
	VoiceEnabled           *bool      `json:"voice_enabled"`
}
