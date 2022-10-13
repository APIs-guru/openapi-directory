package shared

import (
	"time"
)

type NumbersV2RegulatoryComplianceBundle struct {
	AccountSid     *string                `json:"account_sid"`
	DateCreated    *time.Time             `json:"date_created"`
	DateUpdated    *time.Time             `json:"date_updated"`
	Email          *string                `json:"email"`
	FriendlyName   *string                `json:"friendly_name"`
	Links          map[string]interface{} `json:"links"`
	RegulationSid  *string                `json:"regulation_sid"`
	Sid            *string                `json:"sid"`
	Status         *BundleEnumStatusEnum  `json:"status"`
	StatusCallback *string                `json:"status_callback"`
	URL            *string                `json:"url"`
	ValidUntil     *time.Time             `json:"valid_until"`
}
