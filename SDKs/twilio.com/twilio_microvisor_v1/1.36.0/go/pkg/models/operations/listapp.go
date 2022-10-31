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

type ListAppListAppResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListAppListAppResponse struct {
	Apps []shared.MicrovisorV1App    `json:"apps,omitempty"`
	Meta *ListAppListAppResponseMeta `json:"meta,omitempty"`
}

type ListAppResponse struct {
	ContentType     string
	ListAppResponse *ListAppListAppResponse
	StatusCode      int64
}
