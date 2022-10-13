package shared

import (
	"time"
)

type SupersimV1NetworkAccessProfile struct {
	AccountSid  *string                `json:"account_sid"`
	DateCreated *time.Time             `json:"date_created"`
	DateUpdated *time.Time             `json:"date_updated"`
	Links       map[string]interface{} `json:"links"`
	Sid         *string                `json:"sid"`
	UniqueName  *string                `json:"unique_name"`
	URL         *string                `json:"url"`
}
