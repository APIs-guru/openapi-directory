package shared

import (
	"time"
)

type NumbersV2RegulatoryComplianceSupportingDocument struct {
	AccountSid    *string                           `json:"account_sid"`
	Attributes    *interface{}                      `json:"attributes"`
	DateCreated   *time.Time                        `json:"date_created"`
	DateUpdated   *time.Time                        `json:"date_updated"`
	FailureReason *string                           `json:"failure_reason"`
	FriendlyName  *string                           `json:"friendly_name"`
	MimeType      *string                           `json:"mime_type"`
	Sid           *string                           `json:"sid"`
	Status        *SupportingDocumentEnumStatusEnum `json:"status"`
	Type          *string                           `json:"type"`
	URL           *string                           `json:"url"`
}
