package operations

import (
	"openapi/pkg/models/shared"
)

var ListFunctionServers = []string{
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

type ListFunctionRequest struct {
	ServerURL   *string
	PathParams  ListFunctionPathParams
	QueryParams ListFunctionQueryParams
	Security    ListFunctionSecurity
}

type ListFunction200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListFunction200ApplicationJSONListFunctionResponse struct {
	Functions []shared.ServerlessV1ServiceFunction `json:"functions"`
	Meta      *ListFunction200ApplicationJSONMeta  `json:"meta"`
}

type ListFunctionResponse struct {
	ContentType          string
	ListFunctionResponse *ListFunction200ApplicationJSONListFunctionResponse
	StatusCode           int64
}
