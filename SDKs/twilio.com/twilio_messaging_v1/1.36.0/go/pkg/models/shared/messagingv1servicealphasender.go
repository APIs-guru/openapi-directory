package shared

import (
	"time"
)

type MessagingV1ServiceAlphaSender struct {
	AccountSid   *string    `json:"account_sid"`
	AlphaSender  *string    `json:"alpha_sender"`
	Capabilities []string   `json:"capabilities"`
	DateCreated  *time.Time `json:"date_created"`
	DateUpdated  *time.Time `json:"date_updated"`
	ServiceSid   *string    `json:"service_sid"`
	Sid          *string    `json:"sid"`
	URL          *string    `json:"url"`
}
