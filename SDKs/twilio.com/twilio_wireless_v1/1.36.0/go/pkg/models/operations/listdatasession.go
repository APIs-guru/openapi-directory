package operations

import (
	"openapi/pkg/models/shared"
)

var ListDataSessionServers = []string{
	"https://wireless.twilio.com",
}

type ListDataSessionPathParams struct {
	SimSid string `pathParam:"style=simple,explode=false,name=SimSid"`
}

type ListDataSessionQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListDataSessionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListDataSessionRequest struct {
	ServerURL   *string
	PathParams  ListDataSessionPathParams
	QueryParams ListDataSessionQueryParams
	Security    ListDataSessionSecurity
}

type ListDataSessionListDataSessionResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListDataSessionListDataSessionResponse struct {
	DataSessions []shared.WirelessV1SimDataSession           `json:"data_sessions,omitempty"`
	Meta         *ListDataSessionListDataSessionResponseMeta `json:"meta,omitempty"`
}

type ListDataSessionResponse struct {
	ContentType             string
	ListDataSessionResponse *ListDataSessionListDataSessionResponse
	StatusCode              int64
}
