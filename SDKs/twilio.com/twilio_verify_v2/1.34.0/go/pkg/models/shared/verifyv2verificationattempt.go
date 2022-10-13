package shared

import (
	"time"
)

type VerifyV2VerificationAttempt struct {
	AccountSid       *string                                      `json:"account_sid"`
	Channel          *VerificationAttemptEnumChannelsEnum         `json:"channel"`
	ChannelData      *interface{}                                 `json:"channel_data"`
	ConversionStatus *VerificationAttemptEnumConversionStatusEnum `json:"conversion_status"`
	DateCreated      *time.Time                                   `json:"date_created"`
	DateUpdated      *time.Time                                   `json:"date_updated"`
	Price            *interface{}                                 `json:"price"`
	ServiceSid       *string                                      `json:"service_sid"`
	Sid              *string                                      `json:"sid"`
	URL              *string                                      `json:"url"`
	VerificationSid  *string                                      `json:"verification_sid"`
}
