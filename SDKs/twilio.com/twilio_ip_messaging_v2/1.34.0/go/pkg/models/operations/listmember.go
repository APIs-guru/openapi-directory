package operations

import (
	"openapi/pkg/models/shared"
)

var ListMemberServers = []string{
	"https://ip-messaging.twilio.com",
}

type ListMemberPathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListMemberQueryParams struct {
	Identity []string `queryParam:"style=form,explode=true,name=Identity"`
	PageSize *int64   `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListMemberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListMemberRequest struct {
	ServerURL   *string
	PathParams  ListMemberPathParams
	QueryParams ListMemberQueryParams
	Security    ListMemberSecurity
}

type ListMember200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListMember200ApplicationJSONListMemberResponse struct {
	Members []shared.IPMessagingV2ServiceChannelMember `json:"members"`
	Meta    *ListMember200ApplicationJSONMeta          `json:"meta"`
}

type ListMemberResponse struct {
	ContentType        string
	ListMemberResponse *ListMember200ApplicationJSONListMemberResponse
	StatusCode         int64
}
