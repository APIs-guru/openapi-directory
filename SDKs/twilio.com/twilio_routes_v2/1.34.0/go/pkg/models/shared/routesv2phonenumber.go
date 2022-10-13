package shared

import (
	"time"
)

type RoutesV2PhoneNumber struct {
	AccountSid   *string    `json:"account_sid"`
	DateCreated  *time.Time `json:"date_created"`
	DateUpdated  *time.Time `json:"date_updated"`
	FriendlyName *string    `json:"friendly_name"`
	PhoneNumber  *string    `json:"phone_number"`
	Sid          *string    `json:"sid"`
	URL          *string    `json:"url"`
	VoiceRegion  *string    `json:"voice_region"`
}
