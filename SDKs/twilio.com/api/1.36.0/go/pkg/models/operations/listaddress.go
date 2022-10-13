package operations

import (
	"openapi/pkg/models/shared"
)

var ListAddressServers = []string{
	"https://api.twilio.com",
}

type ListAddressPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListAddressQueryParams struct {
	CustomerName *string `queryParam:"style=form,explode=true,name=CustomerName"`
	FriendlyName *string `queryParam:"style=form,explode=true,name=FriendlyName"`
	IsoCountry   *string `queryParam:"style=form,explode=true,name=IsoCountry"`
	PageSize     *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListAddressSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListAddressRequest struct {
	ServerURL   *string
	PathParams  ListAddressPathParams
	QueryParams ListAddressQueryParams
	Security    ListAddressSecurity
}

type ListAddress200ApplicationJSONListAddressResponse struct {
	Addresses       []shared.APIV2010AccountAddress `json:"addresses"`
	End             *int64                          `json:"end"`
	FirstPageURI    *string                         `json:"first_page_uri"`
	NextPageURI     *string                         `json:"next_page_uri"`
	Page            *int64                          `json:"page"`
	PageSize        *int64                          `json:"page_size"`
	PreviousPageURI *string                         `json:"previous_page_uri"`
	Start           *int64                          `json:"start"`
	URI             *string                         `json:"uri"`
}

type ListAddressResponse struct {
	ContentType         string
	ListAddressResponse *ListAddress200ApplicationJSONListAddressResponse
	StatusCode          int64
}
