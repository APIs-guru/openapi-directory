package shared

import (
	"time"
)

type PreviewHostedNumbersAuthorizationDocument struct {
	AddressSid  *string                              `json:"address_sid"`
	CcEmails    []string                             `json:"cc_emails"`
	DateCreated *time.Time                           `json:"date_created"`
	DateUpdated *time.Time                           `json:"date_updated"`
	Email       *string                              `json:"email"`
	Links       map[string]interface{}               `json:"links"`
	Sid         *string                              `json:"sid"`
	Status      *AuthorizationDocumentEnumStatusEnum `json:"status"`
	URL         *string                              `json:"url"`
}
