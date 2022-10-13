package operations

import (
	"openapi/pkg/models/shared"
)

var ListNetworkServers = []string{
	"https://supersim.twilio.com",
}

type ListNetworkQueryParams struct {
	IsoCountry *string `queryParam:"style=form,explode=true,name=IsoCountry"`
	Mcc        *string `queryParam:"style=form,explode=true,name=Mcc"`
	Mnc        *string `queryParam:"style=form,explode=true,name=Mnc"`
	PageSize   *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListNetworkSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListNetworkRequest struct {
	ServerURL   *string
	QueryParams ListNetworkQueryParams
	Security    ListNetworkSecurity
}

type ListNetwork200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListNetwork200ApplicationJSONListNetworkResponse struct {
	Meta     *ListNetwork200ApplicationJSONMeta `json:"meta"`
	Networks []shared.SupersimV1Network         `json:"networks"`
}

type ListNetworkResponse struct {
	ContentType         string
	ListNetworkResponse *ListNetwork200ApplicationJSONListNetworkResponse
	StatusCode          int64
}
