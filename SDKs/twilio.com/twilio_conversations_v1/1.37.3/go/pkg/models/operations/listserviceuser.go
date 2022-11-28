package operations

import (
	"openapi/pkg/models/shared"
)

var ListServiceUserServerList = []string{
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

type ListServiceUserListServiceUserResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListServiceUserListServiceUserResponse struct {
	Meta  *ListServiceUserListServiceUserResponseMeta `json:"meta,omitempty"`
	Users []shared.ConversationsV1ServiceServiceUser  `json:"users,omitempty"`
}

type ListServiceUserRequest struct {
	ServerURL   *string
	PathParams  ListServiceUserPathParams
	QueryParams ListServiceUserQueryParams
	Security    ListServiceUserSecurity
}

type ListServiceUserResponse struct {
	ContentType             string
	ListServiceUserResponse *ListServiceUserListServiceUserResponse
	StatusCode              int64
}
