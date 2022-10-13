package shared

import (
	"time"
)

type VerifyV2ServiceVerification struct {
	AccountSid       *string                      `json:"account_sid"`
	Amount           *string                      `json:"amount"`
	Channel          *VerificationEnumChannelEnum `json:"channel"`
	DateCreated      *time.Time                   `json:"date_created"`
	DateUpdated      *time.Time                   `json:"date_updated"`
	Lookup           *interface{}                 `json:"lookup"`
	Payee            *string                      `json:"payee"`
	SendCodeAttempts []interface{}                `json:"send_code_attempts"`
	ServiceSid       *string                      `json:"service_sid"`
	Sid              *string                      `json:"sid"`
	Sna              *interface{}                 `json:"sna"`
	Status           *string                      `json:"status"`
	To               *string                      `json:"to"`
	URL              *string                      `json:"url"`
	Valid            *bool                        `json:"valid"`
}
