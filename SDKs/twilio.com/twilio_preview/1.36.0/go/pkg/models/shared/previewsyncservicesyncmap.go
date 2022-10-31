package shared

import (
"time")

type PreviewSyncServiceSyncMap struct {
    AccountSid *string `json:"account_sid,omitempty"`
    CreatedBy *string `json:"created_by,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    Revision *string `json:"revision,omitempty"`
    ServiceSid *string `json:"service_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    UniqueName *string `json:"unique_name,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

