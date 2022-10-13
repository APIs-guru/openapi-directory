package operations

import (
	"openapi/pkg/models/shared"
)

var ListSyncStreamServers = []string{
	"https://sync.twilio.com",
}

type ListSyncStreamPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListSyncStreamQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListSyncStreamSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListSyncStreamRequest struct {
	ServerURL   *string
	PathParams  ListSyncStreamPathParams
	QueryParams ListSyncStreamQueryParams
	Security    ListSyncStreamSecurity
}

type ListSyncStream200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListSyncStream200ApplicationJSONListSyncStreamResponse struct {
	Meta    *ListSyncStream200ApplicationJSONMeta `json:"meta"`
	Streams []shared.SyncV1ServiceSyncStream      `json:"streams"`
}

type ListSyncStreamResponse struct {
	ContentType            string
	ListSyncStreamResponse *ListSyncStream200ApplicationJSONListSyncStreamResponse
	StatusCode             int64
}
