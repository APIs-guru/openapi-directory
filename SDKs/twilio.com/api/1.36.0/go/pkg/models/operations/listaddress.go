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

type ListAddressListAddressResponse struct {
	Addresses       []shared.APIV2010AccountAddress `json:"addresses,omitempty"`
	End             *int64                          `json:"end,omitempty"`
	FirstPageURI    *string                         `json:"first_page_uri,omitempty"`
	NextPageURI     *string                         `json:"next_page_uri,omitempty"`
	Page            *int64                          `json:"page,omitempty"`
	PageSize        *int64                          `json:"page_size,omitempty"`
	PreviousPageURI *string                         `json:"previous_page_uri,omitempty"`
	Start           *int64                          `json:"start,omitempty"`
	URI             *string                         `json:"uri,omitempty"`
}

type ListAddressResponse struct {
	ContentType         string
	ListAddressResponse *ListAddressListAddressResponse
	StatusCode          int64
}
