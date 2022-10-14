package operations

import (
	"openapi/pkg/models/shared"
)

var ListServiceUserServers = []string{
	"https://conversations.twilio.com",
}

type ListServiceUserPathParams struct {
	ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
}

type ListServiceUserQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListServiceUserSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListServiceUserRequest struct {
	ServerURL   *string
	PathParams  ListServiceUserPathParams
	QueryParams ListServiceUserQueryParams
	Security    ListServiceUserSecurity
}

type ListServiceUser200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListServiceUser200ApplicationJSONListServiceUserResponse struct {
	Meta  *ListServiceUser200ApplicationJSONMeta     `json:"meta,omitempty"`
	Users []shared.ConversationsV1ServiceServiceUser `json:"users,omitempty"`
}

type ListServiceUserResponse struct {
	ContentType             string
	ListServiceUserResponse *ListServiceUser200ApplicationJSONListServiceUserResponse
	StatusCode              int64
}
