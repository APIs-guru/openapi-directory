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

type ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse struct {
	Extensions []shared.PreviewMarketplaceAvailableAddOnAvailableAddOnExtension                          `json:"extensions,omitempty"`
	Meta       *ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponseMeta `json:"meta,omitempty"`
}

type ListMarketplaceAvailableAddOnExtensionResponse struct {
	ContentType                                    string
	ListMarketplaceAvailableAddOnExtensionResponse *ListMarketplaceAvailableAddOnExtensionListMarketplaceAvailableAddOnExtensionResponse
	StatusCode                                     int64
}
