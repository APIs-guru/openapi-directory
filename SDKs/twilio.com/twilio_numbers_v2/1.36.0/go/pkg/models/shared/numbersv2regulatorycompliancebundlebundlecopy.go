package shared

import (
	"time"
)

type NumbersV2RegulatoryComplianceBundleBundleCopy struct {
	AccountSid     *string                   `json:"account_sid,omitempty"`
	DateCreated    *time.Time                `json:"date_created,omitempty"`
	DateUpdated    *time.Time                `json:"date_updated,omitempty"`
	Email          *string                   `json:"email,omitempty"`
	FriendlyName   *string                   `json:"friendly_name,omitempty"`
	RegulationSid  *string                   `json:"regulation_sid,omitempty"`
	Sid            *string                   `json:"sid,omitempty"`
	Status         *BundleCopyEnumStatusEnum `json:"status,omitempty"`
	StatusCallback *string                   `json:"status_callback,omitempty"`
	ValidUntil     *time.Time                `json:"valid_until,omitempty"`
}
