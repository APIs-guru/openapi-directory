package shared

import (
	"time"
)

type TrusthubV1TrustProductTrustProductEntityAssignment struct {
	AccountSid      *string    `json:"account_sid,omitempty"`
	DateCreated     *time.Time `json:"date_created,omitempty"`
	ObjectSid       *string    `json:"object_sid,omitempty"`
	Sid             *string    `json:"sid,omitempty"`
	TrustProductSid *string    `json:"trust_product_sid,omitempty"`
	URL             *string    `json:"url,omitempty"`
}
