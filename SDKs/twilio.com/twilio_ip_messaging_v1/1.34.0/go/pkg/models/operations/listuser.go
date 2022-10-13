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
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListUser200ApplicationJSONListUserResponse struct {
	Meta  *ListUser200ApplicationJSONMeta   `json:"meta"`
	Users []shared.IPMessagingV1ServiceUser `json:"users"`
}

type ListUserResponse struct {
	ContentType      string
	ListUserResponse *ListUser200ApplicationJSONListUserResponse
	StatusCode       int64
}
