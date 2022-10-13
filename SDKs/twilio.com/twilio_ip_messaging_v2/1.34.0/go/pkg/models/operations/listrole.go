package operations

import (
	"openapi/pkg/models/shared"
)

var ListRoleServers = []string{
	"https://ip-messaging.twilio.com",
}

type ListRolePathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListRoleQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListRoleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListRoleRequest struct {
	ServerURL   *string
	PathParams  ListRolePathParams
	QueryParams ListRoleQueryParams
	Security    ListRoleSecurity
}

type ListRole200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListRole200ApplicationJSONListRoleResponse struct {
	Meta  *ListRole200ApplicationJSONMeta   `json:"meta"`
	Roles []shared.IPMessagingV2ServiceRole `json:"roles"`
}

type ListRoleResponse struct {
	ContentType      string
	ListRoleResponse *ListRole200ApplicationJSONListRoleResponse
	StatusCode       int64
}
