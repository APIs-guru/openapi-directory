package operations

import (
	"openapi/pkg/models/shared"
)

var ListMarketplaceInstalledAddOnServers = []string{
	"https://preview.twilio.com",
}

type ListMarketplaceInstalledAddOnQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListMarketplaceInstalledAddOnSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListMarketplaceInstalledAddOnRequest struct {
	ServerURL   *string
	QueryParams ListMarketplaceInstalledAddOnQueryParams
	Security    ListMarketplaceInstalledAddOnSecurity
}

type ListMarketplaceInstalledAddOn200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListMarketplaceInstalledAddOn200ApplicationJSONListMarketplaceInstalledAddOnResponse struct {
	InstalledAddOns []shared.PreviewMarketplaceInstalledAddOn            `json:"installed_add_ons,omitempty"`
	Meta            *ListMarketplaceInstalledAddOn200ApplicationJSONMeta `json:"meta,omitempty"`
}

type ListMarketplaceInstalledAddOnResponse struct {
	ContentType                           string
	ListMarketplaceInstalledAddOnResponse *ListMarketplaceInstalledAddOn200ApplicationJSONListMarketplaceInstalledAddOnResponse
	StatusCode                            int64
}
