package shared

import (
	"time"
)

type TrusthubV1CustomerProfileCustomerProfileEntityAssignment struct {
	AccountSid         *string    `json:"account_sid,omitempty"`
	CustomerProfileSid *string    `json:"customer_profile_sid,omitempty"`
	DateCreated        *time.Time `json:"date_created,omitempty"`
	ObjectSid          *string    `json:"object_sid,omitempty"`
	Sid                *string    `json:"sid,omitempty"`
	URL                *string    `json:"url,omitempty"`
}
