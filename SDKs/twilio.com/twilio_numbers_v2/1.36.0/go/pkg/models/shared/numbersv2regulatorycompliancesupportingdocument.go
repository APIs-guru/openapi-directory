package shared

import (
	"time"
)

type NumbersV2RegulatoryComplianceSupportingDocument struct {
	AccountSid    *string                           `json:"account_sid,omitempty"`
	Attributes    *interface{}                      `json:"attributes,omitempty"`
	DateCreated   *time.Time                        `json:"date_created,omitempty"`
	DateUpdated   *time.Time                        `json:"date_updated,omitempty"`
	FailureReason *string                           `json:"failure_reason,omitempty"`
	FriendlyName  *string                           `json:"friendly_name,omitempty"`
	MimeType      *string                           `json:"mime_type,omitempty"`
	Sid           *string                           `json:"sid,omitempty"`
	Status        *SupportingDocumentEnumStatusEnum `json:"status,omitempty"`
	Type          *string                           `json:"type,omitempty"`
	URL           *string                           `json:"url,omitempty"`
}
