package operations

import (
	"openapi/pkg/models/shared"
)

var ListUserChannelServers = []string{
	"https://ip-messaging.twilio.com",
}

type ListUserChannelPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	UserSid    string `pathParam:"style=simple,explode=false,name=UserSid"`
}

type ListUserChannelQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListUserChannelSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUserChannelRequest struct {
	ServerURL   *string
	PathParams  ListUserChannelPathParams
	QueryParams ListUserChannelQueryParams
	Security    ListUserChannelSecurity
}

type ListUserChannel200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListUserChannel200ApplicationJSONListUserChannelResponse struct {
	Channels []shared.IPMessagingV1ServiceUserUserChannel `json:"channels"`
	Meta     *ListUserChannel200ApplicationJSONMeta       `json:"meta"`
}

type ListUserChannelResponse struct {
	ContentType             string
	ListUserChannelResponse *ListUserChannel200ApplicationJSONListUserChannelResponse
	StatusCode              int64
}
