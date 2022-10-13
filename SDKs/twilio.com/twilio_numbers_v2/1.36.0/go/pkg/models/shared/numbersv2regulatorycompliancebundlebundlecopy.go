package shared

import (
	"time"
)

type NumbersV2RegulatoryComplianceBundleBundleCopy struct {
	AccountSid     *string                   `json:"account_sid"`
	DateCreated    *time.Time                `json:"date_created"`
	DateUpdated    *time.Time                `json:"date_updated"`
	Email          *string                   `json:"email"`
	FriendlyName   *string                   `json:"friendly_name"`
	RegulationSid  *string                   `json:"regulation_sid"`
	Sid            *string                   `json:"sid"`
	Status         *BundleCopyEnumStatusEnum `json:"status"`
	StatusCallback *string                   `json:"status_callback"`
	ValidUntil     *time.Time                `json:"valid_until"`
}
