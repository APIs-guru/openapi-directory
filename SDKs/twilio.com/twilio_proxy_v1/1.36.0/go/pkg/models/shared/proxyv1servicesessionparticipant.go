package shared

import (
"time")

type ProxyV1ServiceSessionParticipant struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateDeleted *time.Time `json:"date_deleted,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    Identifier *string `json:"identifier,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    ProxyIdentifier *string `json:"proxy_identifier,omitempty"`
    ProxyIdentifierSid *string `json:"proxy_identifier_sid,omitempty"`
    ServiceSid *string `json:"service_sid,omitempty"`
    SessionSid *string `json:"session_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

