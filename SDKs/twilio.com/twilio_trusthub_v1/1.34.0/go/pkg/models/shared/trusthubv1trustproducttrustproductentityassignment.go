package shared

import (
	"time"
)

type TrusthubV1TrustProductTrustProductEntityAssignment struct {
	AccountSid      *string    `json:"account_sid"`
	DateCreated     *time.Time `json:"date_created"`
	ObjectSid       *string    `json:"object_sid"`
	Sid             *string    `json:"sid"`
	TrustProductSid *string    `json:"trust_product_sid"`
	URL             *string    `json:"url"`
}
