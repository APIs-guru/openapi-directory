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

type ListDataSession200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListDataSession200ApplicationJSONListDataSessionResponse struct {
	DataSessions []shared.WirelessV1SimDataSession      `json:"data_sessions"`
	Meta         *ListDataSession200ApplicationJSONMeta `json:"meta"`
}

type ListDataSessionResponse struct {
	ContentType             string
	ListDataSessionResponse *ListDataSession200ApplicationJSONListDataSessionResponse
	StatusCode              int64
}
