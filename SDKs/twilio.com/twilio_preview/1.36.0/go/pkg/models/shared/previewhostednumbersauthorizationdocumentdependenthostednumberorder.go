package shared

import (
	"time"
)

type PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities struct {
	Fax   *bool `json:"fax,omitempty"`
	Mms   *bool `json:"mms,omitempty"`
	Sms   *bool `json:"sms,omitempty"`
	Voice *bool `json:"voice,omitempty"`
}

type PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder struct {
	AccountSid              *string                                                                          `json:"account_sid,omitempty"`
	AddressSid              *string                                                                          `json:"address_sid,omitempty"`
	CallDelay               *int64                                                                           `json:"call_delay,omitempty"`
	Capabilities            *PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities `json:"capabilities,omitempty"`
	CcEmails                []string                                                                         `json:"cc_emails,omitempty"`
	DateCreated             *time.Time                                                                       `json:"date_created,omitempty"`
	DateUpdated             *time.Time                                                                       `json:"date_updated,omitempty"`
	Email                   *string                                                                          `json:"email,omitempty"`
	Extension               *string                                                                          `json:"extension,omitempty"`
	FailureReason           *string                                                                          `json:"failure_reason,omitempty"`
	FriendlyName            *string                                                                          `json:"friendly_name,omitempty"`
	IncomingPhoneNumberSid  *string                                                                          `json:"incoming_phone_number_sid,omitempty"`
	PhoneNumber             *string                                                                          `json:"phone_number,omitempty"`
	Sid                     *string                                                                          `json:"sid,omitempty"`
	SigningDocumentSid      *string                                                                          `json:"signing_document_sid,omitempty"`
	Status                  *DependentHostedNumberOrderEnumStatusEnum                                        `json:"status,omitempty"`
	UniqueName              *string                                                                          `json:"unique_name,omitempty"`
	VerificationAttempts    *int64                                                                           `json:"verification_attempts,omitempty"`
	VerificationCallSids    []string                                                                         `json:"verification_call_sids,omitempty"`
	VerificationCode        *string                                                                          `json:"verification_code,omitempty"`
	VerificationDocumentSid *string                                                                          `json:"verification_document_sid,omitempty"`
	VerificationType        *DependentHostedNumberOrderEnumVerificationTypeEnum                              `json:"verification_type,omitempty"`
}
