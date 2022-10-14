package operations

import (
	"openapi/pkg/models/shared"
)

var ListEnvironmentServers = []string{
	"https://serverless.twilio.com",
}

type ListEnvironmentPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListEnvironmentQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListEnvironmentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListEnvironmentRequest struct {
	ServerURL   *string
	PathParams  ListEnvironmentPathParams
	QueryParams ListEnvironmentQueryParams
	Security    ListEnvironmentSecurity
}

type ListEnvironment200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListEnvironment200ApplicationJSONListEnvironmentResponse struct {
	Environments []shared.ServerlessV1ServiceEnvironment `json:"environments,omitempty"`
	Meta         *ListEnvironment200ApplicationJSONMeta  `json:"meta,omitempty"`
}

type ListEnvironmentResponse struct {
	ContentType             string
	ListEnvironmentResponse *ListEnvironment200ApplicationJSONListEnvironmentResponse
	StatusCode              int64
}
