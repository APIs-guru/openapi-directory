package operations

import (
	"openapi/pkg/models/shared"
)

var ListMarketplaceInstalledAddOnExtensionServerList = []string{
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

type ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse struct {
	Extensions []shared.PreviewMarketplaceInstalledAddOnInstalledAddOnExtension                          `json:"extensions,omitempty"`
	Meta       *ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponseMeta `json:"meta,omitempty"`
}

type ListMarketplaceInstalledAddOnExtensionRequest struct {
	ServerURL   *string
	PathParams  ListMarketplaceInstalledAddOnExtensionPathParams
	QueryParams ListMarketplaceInstalledAddOnExtensionQueryParams
	Security    ListMarketplaceInstalledAddOnExtensionSecurity
}

type ListMarketplaceInstalledAddOnExtensionResponse struct {
	ContentType                                    string
	ListMarketplaceInstalledAddOnExtensionResponse *ListMarketplaceInstalledAddOnExtensionListMarketplaceInstalledAddOnExtensionResponse
	StatusCode                                     int64
}
