package operations

import (
	"openapi/pkg/models/shared"
)

var ListAppServers = []string{
	"https://microvisor.twilio.com",
}

type ListAppQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListAppSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListAppRequest struct {
	ServerURL   *string
	QueryParams ListAppQueryParams
	Security    ListAppSecurity
}

type ListApp200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListApp200ApplicationJSONListAppResponse struct {
	Apps []shared.MicrovisorV1App       `json:"apps"`
	Meta *ListApp200ApplicationJSONMeta `json:"meta"`
}

type ListAppResponse struct {
	ContentType     string
	ListAppResponse *ListApp200ApplicationJSONListAppResponse
	StatusCode      int64
}
