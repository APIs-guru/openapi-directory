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
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListServiceUser200ApplicationJSONListServiceUserResponse struct {
	Meta  *ListServiceUser200ApplicationJSONMeta     `json:"meta"`
	Users []shared.ConversationsV1ServiceServiceUser `json:"users"`
}

type ListServiceUserResponse struct {
	ContentType             string
	ListServiceUserResponse *ListServiceUser200ApplicationJSONListServiceUserResponse
	StatusCode              int64
}
