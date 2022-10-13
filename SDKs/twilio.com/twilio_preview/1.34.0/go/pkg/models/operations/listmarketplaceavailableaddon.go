package operations

import (
	"openapi/pkg/models/shared"
)

var ListMarketplaceAvailableAddOnServers = []string{
	"https://preview.twilio.com",
}

type ListMarketplaceAvailableAddOnQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListMarketplaceAvailableAddOnSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListMarketplaceAvailableAddOnRequest struct {
	ServerURL   *string
	QueryParams ListMarketplaceAvailableAddOnQueryParams
	Security    ListMarketplaceAvailableAddOnSecurity
}

type ListMarketplaceAvailableAddOn200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListMarketplaceAvailableAddOn200ApplicationJSONListMarketplaceAvailableAddOnResponse struct {
	AvailableAddOns []shared.PreviewMarketplaceAvailableAddOn            `json:"available_add_ons"`
	Meta            *ListMarketplaceAvailableAddOn200ApplicationJSONMeta `json:"meta"`
}

type ListMarketplaceAvailableAddOnResponse struct {
	ContentType                           string
	ListMarketplaceAvailableAddOnResponse *ListMarketplaceAvailableAddOn200ApplicationJSONListMarketplaceAvailableAddOnResponse
	StatusCode                            int64
}
