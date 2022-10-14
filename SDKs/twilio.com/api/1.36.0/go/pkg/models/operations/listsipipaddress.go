package operations

import (
	"openapi/pkg/models/shared"
)

var ListSipIPAddressServers = []string{
	"https://api.twilio.com",
}

type ListSipIPAddressPathParams struct {
	AccountSid             string `pathParam:"style=simple,explode=false,name=AccountSid"`
	IPAccessControlListSid string `pathParam:"style=simple,explode=false,name=IpAccessControlListSid"`
}

type ListSipIPAddressQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSipIPAddressSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSipIPAddressRequest struct {
	ServerURL   *string
	PathParams  ListSipIPAddressPathParams
	QueryParams ListSipIPAddressQueryParams
	Security    ListSipIPAddressSecurity
}

type ListSipIPAddress200ApplicationJSONListSipIPAddressResponse struct {
	End             *int64                                                        `json:"end,omitempty"`
	FirstPageURI    *string                                                       `json:"first_page_uri,omitempty"`
	IPAddresses     []shared.APIV2010AccountSipSipIPAccessControlListSipIPAddress `json:"ip_addresses,omitempty"`
	NextPageURI     *string                                                       `json:"next_page_uri,omitempty"`
	Page            *int64                                                        `json:"page,omitempty"`
	PageSize        *int64                                                        `json:"page_size,omitempty"`
	PreviousPageURI *string                                                       `json:"previous_page_uri,omitempty"`
	Start           *int64                                                        `json:"start,omitempty"`
	URI             *string                                                       `json:"uri,omitempty"`
}

type ListSipIPAddressResponse struct {
	ContentType              string
	ListSipIPAddressResponse *ListSipIPAddress200ApplicationJSONListSipIPAddressResponse
	StatusCode               int64
}
