package operations

import (
	"openapi/pkg/models/shared"
)

var ListMarketplaceAvailableAddOnExtensionServers = []string{
	"https://preview.twilio.com",
}

type ListMarketplaceAvailableAddOnExtensionPathParams struct {
	AvailableAddOnSid string `pathParam:"style=simple,explode=false,name=AvailableAddOnSid"`
}

type ListMarketplaceAvailableAddOnExtensionQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListMarketplaceAvailableAddOnExtensionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListMarketplaceAvailableAddOnExtensionRequest struct {
	ServerURL   *string
	PathParams  ListMarketplaceAvailableAddOnExtensionPathParams
	QueryParams ListMarketplaceAvailableAddOnExtensionQueryParams
	Security    ListMarketplaceAvailableAddOnExtensionSecurity
}

type ListMarketplaceAvailableAddOnExtension200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListMarketplaceAvailableAddOnExtension200ApplicationJSONListMarketplaceAvailableAddOnExtensionResponse struct {
	Extensions []shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension `json:"extensions"`
	Meta       *ListMarketplaceAvailableAddOnExtension200ApplicationJSONMeta    `json:"meta"`
}

type ListMarketplaceAvailableAddOnExtensionResponse struct {
	ContentType                                    string
	ListMarketplaceAvailableAddOnExtensionResponse *ListMarketplaceAvailableAddOnExtension200ApplicationJSONListMarketplaceAvailableAddOnExtensionResponse
	StatusCode                                     int64
}
