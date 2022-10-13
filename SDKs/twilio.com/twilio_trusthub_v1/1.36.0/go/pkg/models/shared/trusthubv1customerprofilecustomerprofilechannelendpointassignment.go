package shared

import (
	"time"
)

type TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment struct {
	AccountSid          *string    `json:"account_sid"`
	ChannelEndpointSid  *string    `json:"channel_endpoint_sid"`
	ChannelEndpointType *string    `json:"channel_endpoint_type"`
	CustomerProfileSid  *string    `json:"customer_profile_sid"`
	DateCreated         *time.Time `json:"date_created"`
	Sid                 *string    `json:"sid"`
	URL                 *string    `json:"url"`
}
