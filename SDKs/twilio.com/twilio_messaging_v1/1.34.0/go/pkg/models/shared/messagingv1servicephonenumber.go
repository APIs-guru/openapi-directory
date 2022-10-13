package shared

import (
	"time"
)

type MessagingV1ServicePhoneNumber struct {
	AccountSid   *string    `json:"account_sid"`
	Capabilities []string   `json:"capabilities"`
	CountryCode  *string    `json:"country_code"`
	DateCreated  *time.Time `json:"date_created"`
	DateUpdated  *time.Time `json:"date_updated"`
	PhoneNumber  *string    `json:"phone_number"`
	ServiceSid   *string    `json:"service_sid"`
	Sid          *string    `json:"sid"`
	URL          *string    `json:"url"`
}
