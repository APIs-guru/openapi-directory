package shared

import (
	"time"
)

type TrusthubV1CustomerProfileCustomerProfileEntityAssignment struct {
	AccountSid         *string    `json:"account_sid"`
	CustomerProfileSid *string    `json:"customer_profile_sid"`
	DateCreated        *time.Time `json:"date_created"`
	ObjectSid          *string    `json:"object_sid"`
	Sid                *string    `json:"sid"`
	URL                *string    `json:"url"`
}
