package shared

import (
"time")

type SyncV1ServiceSyncStream struct {
    AccountSid *string `json:"account_sid,omitempty"`
    CreatedBy *string `json:"created_by,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateExpires *time.Time `json:"date_expires,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    ServiceSid *string `json:"service_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    UniqueName *string `json:"unique_name,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

