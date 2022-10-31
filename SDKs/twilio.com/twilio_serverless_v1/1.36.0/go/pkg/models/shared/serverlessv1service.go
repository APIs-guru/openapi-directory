package shared

import (
"time")

type ServerlessV1Service struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    DomainBase *string `json:"domain_base,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    IncludeCredentials *bool `json:"include_credentials,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    Sid *string `json:"sid,omitempty"`
    UIEditable *bool `json:"ui_editable,omitempty"`
    UniqueName *string `json:"unique_name,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

