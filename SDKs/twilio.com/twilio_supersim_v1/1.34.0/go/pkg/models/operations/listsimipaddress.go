package operations

import (
	"openapi/pkg/models/shared"
)

var ListSimIPAddressServers = []string{
	"https://supersim.twilio.com",
}

type ListSimIPAddressPathParams struct {
	SimSid string `pathParam:"style=simple,explode=false,name=SimSid"`
}

type ListSimIPAddressQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSimIPAddressSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSimIPAddressRequest struct {
	ServerURL   *string
	PathParams  ListSimIPAddressPathParams
	QueryParams ListSimIPAddressQueryParams
	Security    ListSimIPAddressSecurity
}

type ListSimIPAddress200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSimIPAddress200ApplicationJSONListSimIPAddressResponse struct {
	IPAddresses []shared.SupersimV1SimSimIPAddress      `json:"ip_addresses"`
	Meta        *ListSimIPAddress200ApplicationJSONMeta `json:"meta"`
}

type ListSimIPAddressResponse struct {
	ContentType              string
	ListSimIPAddressResponse *ListSimIPAddress200ApplicationJSONListSimIPAddressResponse
	StatusCode               int64
}
