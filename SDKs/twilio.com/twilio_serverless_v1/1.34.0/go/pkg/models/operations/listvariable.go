package operations

import (
	"openapi/pkg/models/shared"
)

var ListVariableServers = []string{
	"https://serverless.twilio.com",
}

type ListVariablePathParams struct {
	EnvironmentSid string `pathParam:"style=simple,explode=false,name=EnvironmentSid"`
	ServiceSid     string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListVariableQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListVariableSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListVariableRequest struct {
	ServerURL   *string
	PathParams  ListVariablePathParams
	QueryParams ListVariableQueryParams
	Security    ListVariableSecurity
}

type ListVariable200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListVariable200ApplicationJSONListVariableResponse struct {
	Meta      *ListVariable200ApplicationJSONMeta             `json:"meta"`
	Variables []shared.ServerlessV1ServiceEnvironmentVariable `json:"variables"`
}

type ListVariableResponse struct {
	ContentType          string
	ListVariableResponse *ListVariable200ApplicationJSONListVariableResponse
	StatusCode           int64
}
