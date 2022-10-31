package shared

import (
"time")

type PreviewHostedNumbersAuthorizationDocument struct {
    AddressSid *string `json:"address_sid,omitempty"`
    CcEmails []string `json:"cc_emails,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Email *string `json:"email,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    Sid *string `json:"sid,omitempty"`
    Status *AuthorizationDocumentEnumStatusEnum `json:"status,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

