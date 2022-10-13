package operations

import (
	"openapi/pkg/models/shared"
)

var ListMemberServers = []string{
	"https://api.twilio.com",
}

type ListMemberPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	QueueSid   string `pathParam:"style=simple,explode=false,name=QueueSid"`
}

type ListMemberQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
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

type ListMember200ApplicationJSONListMemberResponse struct {
	End             *int64                              `json:"end"`
	FirstPageURI    *string                             `json:"first_page_uri"`
	NextPageURI     *string                             `json:"next_page_uri"`
	Page            *int64                              `json:"page"`
	PageSize        *int64                              `json:"page_size"`
	PreviousPageURI *string                             `json:"previous_page_uri"`
	QueueMembers    []shared.APIV2010AccountQueueMember `json:"queue_members"`
	Start           *int64                              `json:"start"`
	URI             *string                             `json:"uri"`
}

type ListMemberResponse struct {
	ContentType        string
	ListMemberResponse *ListMember200ApplicationJSONListMemberResponse
	StatusCode         int64
}
