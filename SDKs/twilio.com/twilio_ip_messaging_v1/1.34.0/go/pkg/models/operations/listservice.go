package operations

import (
	"openapi/pkg/models/shared"
)

var ListServiceServers = []string{
	"https://ip-messaging.twilio.com",
}

type ListServiceQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListServiceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListServiceRequest struct {
	ServerURL   *string
	QueryParams ListServiceQueryParams
	Security    ListServiceSecurity
}

type ListService200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListService200ApplicationJSONListServiceResponse struct {
	Meta     *ListService200ApplicationJSONMeta `json:"meta"`
	Services []shared.IPMessagingV1Service      `json:"services"`
}

type ListServiceResponse struct {
	ContentType         string
	ListServiceResponse *ListService200ApplicationJSONListServiceResponse
	StatusCode          int64
}
