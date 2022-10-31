package shared

import (
"time")

type MicrovisorV1Device struct {
    AccountSid *string `json:"account_sid,omitempty"`
    App *interface{} `json:"app,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Logging *interface{} `json:"logging,omitempty"`
    Sid *string `json:"sid,omitempty"`
    UniqueName *string `json:"unique_name,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

