package shared

import (
	"time"
)

type TrusthubV1SupportingDocument struct {
	AccountSid   *string                           `json:"account_sid"`
	Attributes   *interface{}                      `json:"attributes"`
	DateCreated  *time.Time                        `json:"date_created"`
	DateUpdated  *time.Time                        `json:"date_updated"`
	FriendlyName *string                           `json:"friendly_name"`
	MimeType     *string                           `json:"mime_type"`
	Sid          *string                           `json:"sid"`
	Status       *SupportingDocumentEnumStatusEnum `json:"status"`
	Type         *string                           `json:"type"`
	URL          *string                           `json:"url"`
}
