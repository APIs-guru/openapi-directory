package shared

import (
	"time"
)

type NumbersV2RegulatoryComplianceBundleItemAssignment struct {
	AccountSid  *string    `json:"account_sid"`
	BundleSid   *string    `json:"bundle_sid"`
	DateCreated *time.Time `json:"date_created"`
	ObjectSid   *string    `json:"object_sid"`
	Sid         *string    `json:"sid"`
	URL         *string    `json:"url"`
}
