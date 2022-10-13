package shared

import (
	"time"
)

type VerifyV2ServiceVerificationCheck struct {
	AccountSid            *string                           `json:"account_sid"`
	Amount                *string                           `json:"amount"`
	Channel               *VerificationCheckEnumChannelEnum `json:"channel"`
	DateCreated           *time.Time                        `json:"date_created"`
	DateUpdated           *time.Time                        `json:"date_updated"`
	Payee                 *string                           `json:"payee"`
	ServiceSid            *string                           `json:"service_sid"`
	Sid                   *string                           `json:"sid"`
	SnaAttemptsErrorCodes []interface{}                     `json:"sna_attempts_error_codes"`
	Status                *string                           `json:"status"`
	To                    *string                           `json:"to"`
	Valid                 *bool                             `json:"valid"`
}
