package operations

import (
	"openapi/pkg/models/shared"
)

var ListNetworkAccessProfileServers = []string{
	"https://supersim.twilio.com",
}

type ListNetworkAccessProfileQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListNetworkAccessProfileSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListNetworkAccessProfileRequest struct {
	ServerURL   *string
	QueryParams ListNetworkAccessProfileQueryParams
	Security    ListNetworkAccessProfileSecurity
}

type ListNetworkAccessProfile200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListNetworkAccessProfile200ApplicationJSONListNetworkAccessProfileResponse struct {
	Meta                  *ListNetworkAccessProfile200ApplicationJSONMeta `json:"meta"`
	NetworkAccessProfiles []shared.SupersimV1NetworkAccessProfile         `json:"network_access_profiles"`
}

type ListNetworkAccessProfileResponse struct {
	ContentType                      string
	ListNetworkAccessProfileResponse *ListNetworkAccessProfile200ApplicationJSONListNetworkAccessProfileResponse
	StatusCode                       int64
}
