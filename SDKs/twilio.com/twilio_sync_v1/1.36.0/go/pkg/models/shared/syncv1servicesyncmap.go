package shared

import (
	"time"
)

type SyncV1ServiceSyncMap struct {
	AccountSid  *string                `json:"account_sid"`
	CreatedBy   *string                `json:"created_by"`
	DateCreated *time.Time             `json:"date_created"`
	DateExpires *time.Time             `json:"date_expires"`
	DateUpdated *time.Time             `json:"date_updated"`
	Links       map[string]interface{} `json:"links"`
	Revision    *string                `json:"revision"`
	ServiceSid  *string                `json:"service_sid"`
	Sid         *string                `json:"sid"`
	UniqueName  *string                `json:"unique_name"`
	URL         *string                `json:"url"`
}
