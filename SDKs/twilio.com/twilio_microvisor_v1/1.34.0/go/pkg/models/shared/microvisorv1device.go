package shared

import (
	"time"
)

type MicrovisorV1Device struct {
	AccountSid  *string      `json:"account_sid"`
	App         *interface{} `json:"app"`
	DateCreated *time.Time   `json:"date_created"`
	DateUpdated *time.Time   `json:"date_updated"`
	Logging     *interface{} `json:"logging"`
	Sid         *string      `json:"sid"`
	UniqueName  *string      `json:"unique_name"`
	URL         *string      `json:"url"`
}
