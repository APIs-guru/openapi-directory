package shared

import (
	"time"
)

type MessagingV1ServiceAlphaSender struct {
	AccountSid   *string    `json:"account_sid,omitempty"`
	AlphaSender  *string    `json:"alpha_sender,omitempty"`
	Capabilities []string   `json:"capabilities,omitempty"`
	DateCreated  *time.Time `json:"date_created,omitempty"`
	DateUpdated  *time.Time `json:"date_updated,omitempty"`
	ServiceSid   *string    `json:"service_sid,omitempty"`
	Sid          *string    `json:"sid,omitempty"`
	URL          *string    `json:"url,omitempty"`
}
