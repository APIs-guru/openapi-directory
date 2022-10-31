package operations

import (
	"openapi/pkg/models/shared"
)

var ListRoleServers = []string{
	"https://conversations.twilio.com",
}

type ListRoleQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListRoleSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListRoleRequest struct {
	ServerURL   *string
	QueryParams ListRoleQueryParams
	Security    ListRoleSecurity
}

type ListRoleListRoleResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListRoleListRoleResponse struct {
	Meta  *ListRoleListRoleResponseMeta `json:"meta,omitempty"`
	Roles []shared.ConversationsV1Role  `json:"roles,omitempty"`
}

type ListRoleResponse struct {
	ContentType      string
	ListRoleResponse *ListRoleListRoleResponse
	StatusCode       int64
}
