package shared

import (
	"time"
)

type MessagingV1ServicePhoneNumber struct {
	AccountSid   *string    `json:"account_sid,omitempty"`
	Capabilities []string   `json:"capabilities,omitempty"`
	CountryCode  *string    `json:"country_code,omitempty"`
	DateCreated  *time.Time `json:"date_created,omitempty"`
	DateUpdated  *time.Time `json:"date_updated,omitempty"`
	PhoneNumber  *string    `json:"phone_number,omitempty"`
	ServiceSid   *string    `json:"service_sid,omitempty"`
	Sid          *string    `json:"sid,omitempty"`
	URL          *string    `json:"url,omitempty"`
}
