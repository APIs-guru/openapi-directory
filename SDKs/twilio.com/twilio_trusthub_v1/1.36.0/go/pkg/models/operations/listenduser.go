package operations

import (
	"openapi/pkg/models/shared"
)

var ListEndUserServers = []string{
	"https://trusthub.twilio.com",
}

type ListEndUserQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListEndUserSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListEndUserRequest struct {
	ServerURL   *string
	QueryParams ListEndUserQueryParams
	Security    ListEndUserSecurity
}

type ListEndUserListEndUserResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListEndUserListEndUserResponse struct {
	Meta    *ListEndUserListEndUserResponseMeta `json:"meta,omitempty"`
	Results []shared.TrusthubV1EndUser          `json:"results,omitempty"`
}

type ListEndUserResponse struct {
	ContentType         string
	ListEndUserResponse *ListEndUserListEndUserResponse
	StatusCode          int64
}
