package operations

import (
	"openapi/pkg/models/shared"
)

var ListUserServers = []string{
	"https://ip-messaging.twilio.com",
}

type ListUserPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListUserQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListUserSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUserRequest struct {
	ServerURL   *string
	PathParams  ListUserPathParams
	QueryParams ListUserQueryParams
	Security    ListUserSecurity
}

type ListUser200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListUser200ApplicationJSONListUserResponse struct {
	Meta  *ListUser200ApplicationJSONMeta   `json:"meta,omitempty"`
	Users []shared.IPMessagingV1ServiceUser `json:"users,omitempty"`
}

type ListUserResponse struct {
	ContentType      string
	ListUserResponse *ListUser200ApplicationJSONListUserResponse
	StatusCode       int64
}
