package operations

import (
	"openapi/pkg/models/shared"
)

var ListMemberServerList = []string{
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

type ListMemberListMemberResponse struct {
	End             *int64                              `json:"end,omitempty"`
	FirstPageURI    *string                             `json:"first_page_uri,omitempty"`
	NextPageURI     *string                             `json:"next_page_uri,omitempty"`
	Page            *int64                              `json:"page,omitempty"`
	PageSize        *int64                              `json:"page_size,omitempty"`
	PreviousPageURI *string                             `json:"previous_page_uri,omitempty"`
	QueueMembers    []shared.APIV2010AccountQueueMember `json:"queue_members,omitempty"`
	Start           *int64                              `json:"start,omitempty"`
	URI             *string                             `json:"uri,omitempty"`
}

type ListMemberRequest struct {
	ServerURL   *string
	PathParams  ListMemberPathParams
	QueryParams ListMemberQueryParams
	Security    ListMemberSecurity
}

type ListMemberResponse struct {
	ContentType        string
	ListMemberResponse *ListMemberListMemberResponse
	StatusCode         int64
}
