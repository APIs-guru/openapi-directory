package shared

import (
	"time"
)

type NumbersV2RegulatoryComplianceBundleItemAssignment struct {
	AccountSid  *string    `json:"account_sid,omitempty"`
	BundleSid   *string    `json:"bundle_sid,omitempty"`
	DateCreated *time.Time `json:"date_created,omitempty"`
	ObjectSid   *string    `json:"object_sid,omitempty"`
	Sid         *string    `json:"sid,omitempty"`
	URL         *string    `json:"url,omitempty"`
}
