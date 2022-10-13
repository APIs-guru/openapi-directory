package shared

import (
	"time"
)

type MicrovisorV1App struct {
	AccountSid  *string    `json:"account_sid"`
	DateCreated *time.Time `json:"date_created"`
	DateUpdated *time.Time `json:"date_updated"`
	Hash        *string    `json:"hash"`
	Sid         *string    `json:"sid"`
	UniqueName  *string    `json:"unique_name"`
	URL         *string    `json:"url"`
}
