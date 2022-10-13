package shared

import (
	"time"
)

type PreviewMarketplaceInstalledAddOn struct {
	AccountSid    *string                `json:"account_sid"`
	Configuration *interface{}           `json:"configuration"`
	DateCreated   *time.Time             `json:"date_created"`
	DateUpdated   *time.Time             `json:"date_updated"`
	Description   *string                `json:"description"`
	FriendlyName  *string                `json:"friendly_name"`
	Links         map[string]interface{} `json:"links"`
	Sid           *string                `json:"sid"`
	UniqueName    *string                `json:"unique_name"`
	URL           *string                `json:"url"`
}
