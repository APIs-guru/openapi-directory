package shared

import (
	"time"
)

type FaxV1FaxFaxMedia struct {
	AccountSid  *string    `json:"account_sid"`
	ContentType *string    `json:"content_type"`
	DateCreated *time.Time `json:"date_created"`
	DateUpdated *time.Time `json:"date_updated"`
	FaxSid      *string    `json:"fax_sid"`
	Sid         *string    `json:"sid"`
	URL         *string    `json:"url"`
}
