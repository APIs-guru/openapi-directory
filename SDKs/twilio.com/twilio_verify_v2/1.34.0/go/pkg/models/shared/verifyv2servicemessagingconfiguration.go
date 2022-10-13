package shared

import (
	"time"
)

type VerifyV2ServiceMessagingConfiguration struct {
	AccountSid          *string    `json:"account_sid"`
	Country             *string    `json:"country"`
	DateCreated         *time.Time `json:"date_created"`
	DateUpdated         *time.Time `json:"date_updated"`
	MessagingServiceSid *string    `json:"messaging_service_sid"`
	ServiceSid          *string    `json:"service_sid"`
	URL                 *string    `json:"url"`
}
