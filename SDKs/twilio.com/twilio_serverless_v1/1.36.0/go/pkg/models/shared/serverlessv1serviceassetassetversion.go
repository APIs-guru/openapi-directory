package shared

import (
"time")

type ServerlessV1ServiceAssetAssetVersion struct {
    AccountSid *string `json:"account_sid,omitempty"`
    AssetSid *string `json:"asset_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    Path *string `json:"path,omitempty"`
    ServiceSid *string `json:"service_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    URL *string `json:"url,omitempty"`
    Visibility *AssetVersionEnumVisibilityEnum `json:"visibility,omitempty"`
    
}

