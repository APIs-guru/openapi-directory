package shared

import (
"time")

type PreviewSyncServiceSyncMapSyncMapItem struct {
    AccountSid *string `json:"account_sid,omitempty"`
    CreatedBy *string `json:"created_by,omitempty"`
    Data *interface{} `json:"data,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Key *string `json:"key,omitempty"`
    MapSid *string `json:"map_sid,omitempty"`
    Revision *string `json:"revision,omitempty"`
    ServiceSid *string `json:"service_sid,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

