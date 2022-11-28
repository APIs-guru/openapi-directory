package shared

import (
	"time"
)

type NumbersV2RegulatoryComplianceEndUser struct {
	AccountSid   *string              `json:"account_sid,omitempty"`
	Attributes   *interface{}         `json:"attributes,omitempty"`
	DateCreated  *time.Time           `json:"date_created,omitempty"`
	DateUpdated  *time.Time           `json:"date_updated,omitempty"`
	FriendlyName *string              `json:"friendly_name,omitempty"`
	Sid          *string              `json:"sid,omitempty"`
	Type         *EndUserEnumTypeEnum `json:"type,omitempty"`
	URL          *string              `json:"url,omitempty"`
}
