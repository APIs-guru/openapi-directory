package shared

import (
	"time"
)

type PreviewSyncServiceSyncListSyncListItem struct {
	AccountSid  *string      `json:"account_sid"`
	CreatedBy   *string      `json:"created_by"`
	Data        *interface{} `json:"data"`
	DateCreated *time.Time   `json:"date_created"`
	DateUpdated *time.Time   `json:"date_updated"`
	Index       *int64       `json:"index"`
	ListSid     *string      `json:"list_sid"`
	Revision    *string      `json:"revision"`
	ServiceSid  *string      `json:"service_sid"`
	URL         *string      `json:"url"`
}
