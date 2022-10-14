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
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListMarketplaceAvailableAddOn200ApplicationJSONListMarketplaceAvailableAddOnResponse struct {
	AvailableAddOns []shared.PreviewMarketplaceAvailableAddOn            `json:"available_add_ons,omitempty"`
	Meta            *ListMarketplaceAvailableAddOn200ApplicationJSONMeta `json:"meta,omitempty"`
}

type ListMarketplaceAvailableAddOnResponse struct {
	ContentType                           string
	ListMarketplaceAvailableAddOnResponse *ListMarketplaceAvailableAddOn200ApplicationJSONListMarketplaceAvailableAddOnResponse
	StatusCode                            int64
}
