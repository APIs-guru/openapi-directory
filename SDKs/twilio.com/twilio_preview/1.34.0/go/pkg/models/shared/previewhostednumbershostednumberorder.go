package shared

import (
	"time"
)

type PreviewHostedNumbersHostedNumberOrderCapabilities struct {
	Fax   *bool `json:"fax"`
	Mms   *bool `json:"mms"`
	Sms   *bool `json:"sms"`
	Voice *bool `json:"voice"`
}

type PreviewHostedNumbersHostedNumberOrder struct {
	AccountSid              *string                                            `json:"account_sid"`
	AddressSid              *string                                            `json:"address_sid"`
	CallDelay               *int64                                             `json:"call_delay"`
	Capabilities            *PreviewHostedNumbersHostedNumberOrderCapabilities `json:"capabilities"`
	CcEmails                []string                                           `json:"cc_emails"`
	DateCreated             *time.Time                                         `json:"date_created"`
	DateUpdated             *time.Time                                         `json:"date_updated"`
	Email                   *string                                            `json:"email"`
	Extension               *string                                            `json:"extension"`
	FailureReason           *string                                            `json:"failure_reason"`
	FriendlyName            *string                                            `json:"friendly_name"`
	IncomingPhoneNumberSid  *string                                            `json:"incoming_phone_number_sid"`
	PhoneNumber             *string                                            `json:"phone_number"`
	Sid                     *string                                            `json:"sid"`
	SigningDocumentSid      *string                                            `json:"signing_document_sid"`
	Status                  *HostedNumberOrderEnumStatusEnum                   `json:"status"`
	UniqueName              *string                                            `json:"unique_name"`
	URL                     *string                                            `json:"url"`
	VerificationAttempts    *int64                                             `json:"verification_attempts"`
	VerificationCallSids    []string                                           `json:"verification_call_sids"`
	VerificationCode        *string                                            `json:"verification_code"`
	VerificationDocumentSid *string                                            `json:"verification_document_sid"`
	VerificationType        *HostedNumberOrderEnumVerificationTypeEnum         `json:"verification_type"`
}
