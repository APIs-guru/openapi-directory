package operations

import (
	"openapi/pkg/models/shared"
)

var ListFunctionServerList = []string{
	"https://serverless.twilio.com",
}

type ListFunctionPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListFunctionQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListFunctionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListFunctionListFunctionResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListFunctionListFunctionResponse struct {
	Functions []shared.ServerlessV1ServiceFunction  `json:"functions,omitempty"`
	Meta      *ListFunctionListFunctionResponseMeta `json:"meta,omitempty"`
}

type ListFunctionRequest struct {
	ServerURL   *string
	PathParams  ListFunctionPathParams
	QueryParams ListFunctionQueryParams
	Security    ListFunctionSecurity
}

type ListFunctionResponse struct {
	ContentType          string
	ListFunctionResponse *ListFunctionListFunctionResponse
	StatusCode           int64
}
