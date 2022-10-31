package operations

import (
	"openapi/pkg/models/shared"
)

var ListBuildServers = []string{
	"https://serverless.twilio.com",
}

type ListBuildPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListBuildQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListBuildSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListBuildRequest struct {
	ServerURL   *string
	PathParams  ListBuildPathParams
	QueryParams ListBuildQueryParams
	Security    ListBuildSecurity
}

type ListBuildListBuildResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListBuildListBuildResponse struct {
	Builds []shared.ServerlessV1ServiceBuild `json:"builds,omitempty"`
	Meta   *ListBuildListBuildResponseMeta   `json:"meta,omitempty"`
}

type ListBuildResponse struct {
	ContentType       string
	ListBuildResponse *ListBuildListBuildResponse
	StatusCode        int64
}
