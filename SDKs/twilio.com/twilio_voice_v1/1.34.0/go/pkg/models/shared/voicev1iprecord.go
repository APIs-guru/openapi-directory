package shared

import (
	"time"
)

type VoiceV1IPRecord struct {
	AccountSid       *string    `json:"account_sid"`
	CidrPrefixLength *int64     `json:"cidr_prefix_length"`
	DateCreated      *time.Time `json:"date_created"`
	DateUpdated      *time.Time `json:"date_updated"`
	FriendlyName     *string    `json:"friendly_name"`
	IPAddress        *string    `json:"ip_address"`
	Sid              *string    `json:"sid"`
	URL              *string    `json:"url"`
}
