package shared

import (
	"time"
)

type TrusthubV1TrustProductTrustProductChannelEndpointAssignment struct {
	AccountSid          *string    `json:"account_sid"`
	ChannelEndpointSid  *string    `json:"channel_endpoint_sid"`
	ChannelEndpointType *string    `json:"channel_endpoint_type"`
	DateCreated         *time.Time `json:"date_created"`
	Sid                 *string    `json:"sid"`
	TrustProductSid     *string    `json:"trust_product_sid"`
	URL                 *string    `json:"url"`
}
