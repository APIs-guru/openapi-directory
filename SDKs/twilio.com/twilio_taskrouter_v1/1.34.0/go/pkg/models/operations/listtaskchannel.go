package operations

import (
	"openapi/pkg/models/shared"
)

var ListTaskChannelServers = []string{
	"https://taskrouter.twilio.com",
}

type ListTaskChannelPathParams struct {
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type ListTaskChannelQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListTaskChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListTaskChannelRequest struct {
	ServerURL   *string
	PathParams  ListTaskChannelPathParams
	QueryParams ListTaskChannelQueryParams
	Security    ListTaskChannelSecurity
}

type ListTaskChannel200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListTaskChannel200ApplicationJSONListTaskChannelResponse struct {
	Channels []shared.TaskrouterV1WorkspaceTaskChannel `json:"channels"`
	Meta     *ListTaskChannel200ApplicationJSONMeta    `json:"meta"`
}

type ListTaskChannelResponse struct {
	ContentType             string
	ListTaskChannelResponse *ListTaskChannel200ApplicationJSONListTaskChannelResponse
	StatusCode              int64
}
