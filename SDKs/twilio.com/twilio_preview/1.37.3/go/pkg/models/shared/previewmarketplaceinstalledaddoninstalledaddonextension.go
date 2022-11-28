package shared

type PreviewMarketplaceInstalledAddOnInstalledAddOnExtension struct {
	Enabled           *bool   `json:"enabled,omitempty"`
	FriendlyName      *string `json:"friendly_name,omitempty"`
	InstalledAddOnSid *string `json:"installed_add_on_sid,omitempty"`
	ProductName       *string `json:"product_name,omitempty"`
	Sid               *string `json:"sid,omitempty"`
	UniqueName        *string `json:"unique_name,omitempty"`
	URL               *string `json:"url,omitempty"`
}
