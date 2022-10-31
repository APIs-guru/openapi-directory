package shared

import (
	"time"
)

type TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment struct {
	AccountSid          *string    `json:"account_sid,omitempty"`
	ChannelEndpointSid  *string    `json:"channel_endpoint_sid,omitempty"`
	ChannelEndpointType *string    `json:"channel_endpoint_type,omitempty"`
	CustomerProfileSid  *string    `json:"customer_profile_sid,omitempty"`
	DateCreated         *time.Time `json:"date_created,omitempty"`
	Sid                 *string    `json:"sid,omitempty"`
	URL                 *string    `json:"url,omitempty"`
}
