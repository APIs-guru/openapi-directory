package operations

import (
	"openapi/pkg/models/shared"
)

var ListMarketplaceInstalledAddOnExtensionServers = []string{
	"https://preview.twilio.com",
}

type ListMarketplaceInstalledAddOnExtensionPathParams struct {
	InstalledAddOnSid string `pathParam:"style=simple,explode=false,name=InstalledAddOnSid"`
}

type ListMarketplaceInstalledAddOnExtensionQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListMarketplaceInstalledAddOnExtensionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListMarketplaceInstalledAddOnExtensionRequest struct {
	ServerURL   *string
	PathParams  ListMarketplaceInstalledAddOnExtensionPathParams
	QueryParams ListMarketplaceInstalledAddOnExtensionQueryParams
	Security    ListMarketplaceInstalledAddOnExtensionSecurity
}

type ListMarketplaceInstalledAddOnExtension200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListMarketplaceInstalledAddOnExtension200ApplicationJSONListMarketplaceInstalledAddOnExtensionResponse struct {
	Extensions []shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension `json:"extensions"`
	Meta       *ListMarketplaceInstalledAddOnExtension200ApplicationJSONMeta    `json:"meta"`
}

type ListMarketplaceInstalledAddOnExtensionResponse struct {
	ContentType                                    string
	ListMarketplaceInstalledAddOnExtensionResponse *ListMarketplaceInstalledAddOnExtension200ApplicationJSONListMarketplaceInstalledAddOnExtensionResponse
	StatusCode                                     int64
}
