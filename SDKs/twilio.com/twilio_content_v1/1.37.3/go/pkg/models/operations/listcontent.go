package operations

import (
	"openapi/pkg/models/shared"
)

var ListContentServerList = []string{
	"https://content.twilio.com",
}

type ListContentQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListContentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListContentListContentResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListContentListContentResponse struct {
	Contents []shared.ContentV1Content           `json:"contents,omitempty"`
	Meta     *ListContentListContentResponseMeta `json:"meta,omitempty"`
}

type ListContentRequest struct {
	ServerURL   *string
	QueryParams ListContentQueryParams
	Security    ListContentSecurity
}

type ListContentResponse struct {
	ContentType         string
	ListContentResponse *ListContentListContentResponse
	StatusCode          int64
}
