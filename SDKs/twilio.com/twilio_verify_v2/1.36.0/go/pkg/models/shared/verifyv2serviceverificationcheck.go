package shared

import (
	"time"
)

type VerifyV2ServiceVerificationCheck struct {
	AccountSid            *string                           `json:"account_sid,omitempty"`
	Amount                *string                           `json:"amount,omitempty"`
	Channel               *VerificationCheckEnumChannelEnum `json:"channel,omitempty"`
	DateCreated           *time.Time                        `json:"date_created,omitempty"`
	DateUpdated           *time.Time                        `json:"date_updated,omitempty"`
	Payee                 *string                           `json:"payee,omitempty"`
	ServiceSid            *string                           `json:"service_sid,omitempty"`
	Sid                   *string                           `json:"sid,omitempty"`
	SnaAttemptsErrorCodes []interface{}                     `json:"sna_attempts_error_codes,omitempty"`
	Status                *string                           `json:"status,omitempty"`
	To                    *string                           `json:"to,omitempty"`
	Valid                 *bool                             `json:"valid,omitempty"`
}
