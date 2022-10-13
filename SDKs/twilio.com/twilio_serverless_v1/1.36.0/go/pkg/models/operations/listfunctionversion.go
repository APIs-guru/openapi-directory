package operations

import (
	"openapi/pkg/models/shared"
)

var ListFunctionVersionServers = []string{
	"https://serverless.twilio.com",
}

type ListFunctionVersionPathParams struct {
	FunctionSid string `pathParam:"style=simple,explode=false,name=FunctionSid"`
	ServiceSid  string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListFunctionVersionQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListFunctionVersionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListFunctionVersionRequest struct {
	ServerURL   *string
	PathParams  ListFunctionVersionPathParams
	QueryParams ListFunctionVersionQueryParams
	Security    ListFunctionVersionSecurity
}

type ListFunctionVersion200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListFunctionVersion200ApplicationJSONListFunctionVersionResponse struct {
	FunctionVersions []shared.ServerlessV1ServiceFunctionFunctionVersion `json:"function_versions"`
	Meta             *ListFunctionVersion200ApplicationJSONMeta          `json:"meta"`
}

type ListFunctionVersionResponse struct {
	ContentType                 string
	ListFunctionVersionResponse *ListFunctionVersion200ApplicationJSONListFunctionVersionResponse
	StatusCode                  int64
}
