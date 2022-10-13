package shared

import (
	"time"
)

type PreviewSyncServiceSyncMapSyncMapItem struct {
	AccountSid  *string      `json:"account_sid"`
	CreatedBy   *string      `json:"created_by"`
	Data        *interface{} `json:"data"`
	DateCreated *time.Time   `json:"date_created"`
	DateUpdated *time.Time   `json:"date_updated"`
	Key         *string      `json:"key"`
	MapSid      *string      `json:"map_sid"`
	Revision    *string      `json:"revision"`
	ServiceSid  *string      `json:"service_sid"`
	URL         *string      `json:"url"`
}
