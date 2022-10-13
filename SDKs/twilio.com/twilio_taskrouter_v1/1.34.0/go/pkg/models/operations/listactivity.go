package operations

import (
	"openapi/pkg/models/shared"
)

var ListActivityServers = []string{
	"https://taskrouter.twilio.com",
}

type ListActivityPathParams struct {
	WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
}

type ListActivityQueryParams struct {
	Available    *string `queryParam:"style=form,explode=true,name=Available"`
	FriendlyName *string `queryParam:"style=form,explode=true,name=FriendlyName"`
	PageSize     *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListActivitySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListActivityRequest struct {
	ServerURL   *string
	PathParams  ListActivityPathParams
	QueryParams ListActivityQueryParams
	Security    ListActivitySecurity
}

type ListActivity200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListActivity200ApplicationJSONListActivityResponse struct {
	Activities []shared.TaskrouterV1WorkspaceActivity `json:"activities"`
	Meta       *ListActivity200ApplicationJSONMeta    `json:"meta"`
}

type ListActivityResponse struct {
	ContentType          string
	ListActivityResponse *ListActivity200ApplicationJSONListActivityResponse
	StatusCode           int64
}
