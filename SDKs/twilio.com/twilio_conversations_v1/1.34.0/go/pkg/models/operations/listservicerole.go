package operations

import (
	"openapi/pkg/models/shared"
)

var ListServiceRoleServers = []string{
	"https://conversations.twilio.com",
}

type ListServiceRolePathParams struct {
	ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
}

type ListServiceRoleQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListServiceRoleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListServiceRoleRequest struct {
	ServerURL   *string
	PathParams  ListServiceRolePathParams
	QueryParams ListServiceRoleQueryParams
	Security    ListServiceRoleSecurity
}

type ListServiceRole200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListServiceRole200ApplicationJSONListServiceRoleResponse struct {
	Meta  *ListServiceRole200ApplicationJSONMeta     `json:"meta"`
	Roles []shared.ConversationsV1ServiceServiceRole `json:"roles"`
}

type ListServiceRoleResponse struct {
	ContentType             string
	ListServiceRoleResponse *ListServiceRole200ApplicationJSONListServiceRoleResponse
	StatusCode              int64
}
