package shared

import (
	"time"
)

type ServerlessV1ServiceAssetAssetVersion struct {
	AccountSid  *string                         `json:"account_sid"`
	AssetSid    *string                         `json:"asset_sid"`
	DateCreated *time.Time                      `json:"date_created"`
	Path        *string                         `json:"path"`
	ServiceSid  *string                         `json:"service_sid"`
	Sid         *string                         `json:"sid"`
	URL         *string                         `json:"url"`
	Visibility  *AssetVersionEnumVisibilityEnum `json:"visibility"`
}
