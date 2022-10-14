package shared

import (
	"time"
)

type TrusthubV1TrustProductTrustProductChannelEndpointAssignment struct {
	AccountSid          *string    `json:"account_sid,omitempty"`
	ChannelEndpointSid  *string    `json:"channel_endpoint_sid,omitempty"`
	ChannelEndpointType *string    `json:"channel_endpoint_type,omitempty"`
	DateCreated         *time.Time `json:"date_created,omitempty"`
	Sid                 *string    `json:"sid,omitempty"`
	TrustProductSid     *string    `json:"trust_product_sid,omitempty"`
	URL                 *string    `json:"url,omitempty"`
}
