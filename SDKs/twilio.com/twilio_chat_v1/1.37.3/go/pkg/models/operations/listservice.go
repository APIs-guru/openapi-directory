package operations

import (
	"openapi/pkg/models/shared"
)

var ListServiceServerList = []string{
	"https://chat.twilio.com",
}

type ListServiceQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListServiceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListServiceListServiceResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListServiceListServiceResponse struct {
	Meta     *ListServiceListServiceResponseMeta `json:"meta,omitempty"`
	Services []shared.ChatV1Service              `json:"services,omitempty"`
}

type ListServiceRequest struct {
	ServerURL   *string
	QueryParams ListServiceQueryParams
	Security    ListServiceSecurity
}

type ListServiceResponse struct {
	ContentType         string
	ListServiceResponse *ListServiceListServiceResponse
	StatusCode          int64
}
