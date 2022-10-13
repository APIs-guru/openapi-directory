package operations

import (
	"openapi/pkg/models/shared"
)

var ListSessionServers = []string{
	"https://proxy.twilio.com",
}

type ListSessionPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListSessionQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSessionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSessionRequest struct {
	ServerURL   *string
	PathParams  ListSessionPathParams
	QueryParams ListSessionQueryParams
	Security    ListSessionSecurity
}

type ListSession200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSession200ApplicationJSONListSessionResponse struct {
	Meta     *ListSession200ApplicationJSONMeta `json:"meta"`
	Sessions []shared.ProxyV1ServiceSession     `json:"sessions"`
}

type ListSessionResponse struct {
	ContentType         string
	ListSessionResponse *ListSession200ApplicationJSONListSessionResponse
	StatusCode          int64
}
