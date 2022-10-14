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
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListRole200ApplicationJSONListRoleResponse struct {
	Meta  *ListRole200ApplicationJSONMeta   `json:"meta,omitempty"`
	Roles []shared.IPMessagingV2ServiceRole `json:"roles,omitempty"`
}

type ListRoleResponse struct {
	ContentType      string
	ListRoleResponse *ListRole200ApplicationJSONListRoleResponse
	StatusCode       int64
}
