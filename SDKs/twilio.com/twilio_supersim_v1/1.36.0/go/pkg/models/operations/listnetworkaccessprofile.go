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

type ListNetworkAccessProfileListNetworkAccessProfileResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListNetworkAccessProfileListNetworkAccessProfileResponse struct {
	Meta                  *ListNetworkAccessProfileListNetworkAccessProfileResponseMeta `json:"meta,omitempty"`
	NetworkAccessProfiles []shared.SupersimV1NetworkAccessProfile                       `json:"network_access_profiles,omitempty"`
}

type ListNetworkAccessProfileResponse struct {
	ContentType                      string
	ListNetworkAccessProfileResponse *ListNetworkAccessProfileListNetworkAccessProfileResponse
	StatusCode                       int64
}
