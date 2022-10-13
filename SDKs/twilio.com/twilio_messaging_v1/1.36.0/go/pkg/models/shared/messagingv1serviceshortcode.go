package shared

import (
	"time"
)

type MessagingV1ServiceShortCode struct {
	AccountSid   *string    `json:"account_sid"`
	Capabilities []string   `json:"capabilities"`
	CountryCode  *string    `json:"country_code"`
	DateCreated  *time.Time `json:"date_created"`
	DateUpdated  *time.Time `json:"date_updated"`
	ServiceSid   *string    `json:"service_sid"`
	ShortCode    *string    `json:"short_code"`
	Sid          *string    `json:"sid"`
	URL          *string    `json:"url"`
}
