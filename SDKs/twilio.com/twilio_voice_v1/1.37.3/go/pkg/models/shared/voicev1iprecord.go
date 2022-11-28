package shared

import (
	"time"
)

type VoiceV1IPRecord struct {
	AccountSid       *string    `json:"account_sid,omitempty"`
	CidrPrefixLength *int64     `json:"cidr_prefix_length,omitempty"`
	DateCreated      *time.Time `json:"date_created,omitempty"`
	DateUpdated      *time.Time `json:"date_updated,omitempty"`
	FriendlyName     *string    `json:"friendly_name,omitempty"`
	IPAddress        *string    `json:"ip_address,omitempty"`
	Sid              *string    `json:"sid,omitempty"`
	URL              *string    `json:"url,omitempty"`
}
