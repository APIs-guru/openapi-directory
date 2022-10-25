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

type ListFunctionVersionListFunctionVersionResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListFunctionVersionListFunctionVersionResponse struct {
	FunctionVersions []shared.ServerlessV1ServiceFunctionFunctionVersion `json:"function_versions,omitempty"`
	Meta             *ListFunctionVersionListFunctionVersionResponseMeta `json:"meta,omitempty"`
}

type ListFunctionVersionResponse struct {
	ContentType                 string
	ListFunctionVersionResponse *ListFunctionVersionListFunctionVersionResponse
	StatusCode                  int64
}
