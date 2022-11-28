package operations

import (
	"openapi/pkg/models/shared"
)

var ListSessionServerList = []string{
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

type ListSessionListSessionResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListSessionListSessionResponse struct {
	Meta     *ListSessionListSessionResponseMeta `json:"meta,omitempty"`
	Sessions []shared.ProxyV1ServiceSession      `json:"sessions,omitempty"`
}

type ListSessionRequest struct {
	ServerURL   *string
	PathParams  ListSessionPathParams
	QueryParams ListSessionQueryParams
	Security    ListSessionSecurity
}

type ListSessionResponse struct {
	ContentType         string
	ListSessionResponse *ListSessionListSessionResponse
	StatusCode          int64
}
