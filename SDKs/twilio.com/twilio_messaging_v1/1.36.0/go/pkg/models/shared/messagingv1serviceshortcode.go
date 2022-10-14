package shared

import (
	"time"
)

type MessagingV1ServiceShortCode struct {
	AccountSid   *string    `json:"account_sid,omitempty"`
	Capabilities []string   `json:"capabilities,omitempty"`
	CountryCode  *string    `json:"country_code,omitempty"`
	DateCreated  *time.Time `json:"date_created,omitempty"`
	DateUpdated  *time.Time `json:"date_updated,omitempty"`
	ServiceSid   *string    `json:"service_sid,omitempty"`
	ShortCode    *string    `json:"short_code,omitempty"`
	Sid          *string    `json:"sid,omitempty"`
	URL          *string    `json:"url,omitempty"`
}
