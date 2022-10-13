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

type ListBuild200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListBuild200ApplicationJSONListBuildResponse struct {
	Builds []shared.ServerlessV1ServiceBuild `json:"builds"`
	Meta   *ListBuild200ApplicationJSONMeta  `json:"meta"`
}

type ListBuildResponse struct {
	ContentType       string
	ListBuildResponse *ListBuild200ApplicationJSONListBuildResponse
	StatusCode        int64
}
