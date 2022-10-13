package operations

import (
	"openapi/pkg/models/shared"
)

var ListWorkerChannelServers = []string{
	"https://taskrouter.twilio.com",
}

type ListWorkerChannelPathParams struct {
	WorkerSid    string `pathParam:"style=simple,explode=false,name=WorkerSid"`
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type ListWorkerChannelQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListWorkerChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListWorkerChannelRequest struct {
	ServerURL   *string
	PathParams  ListWorkerChannelPathParams
	QueryParams ListWorkerChannelQueryParams
	Security    ListWorkerChannelSecurity
}

type ListWorkerChannel200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListWorkerChannel200ApplicationJSONListWorkerChannelResponse struct {
	Channels []shared.TaskrouterV1WorkspaceWorkerWorkerChannel `json:"channels"`
	Meta     *ListWorkerChannel200ApplicationJSONMeta          `json:"meta"`
}

type ListWorkerChannelResponse struct {
	ContentType               string
	ListWorkerChannelResponse *ListWorkerChannel200ApplicationJSONListWorkerChannelResponse
	StatusCode                int64
}
