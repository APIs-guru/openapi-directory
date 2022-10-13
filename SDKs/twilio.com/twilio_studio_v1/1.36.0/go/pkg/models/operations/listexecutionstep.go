package operations

import (
	"openapi/pkg/models/shared"
)

var ListExecutionStepServers = []string{
	"https://studio.twilio.com",
}

type ListExecutionStepPathParams struct {
	ExecutionSid string `pathParam:"style=simple,explode=false,name=ExecutionSid"`
	FlowSid      string `pathParam:"style=simple,explode=false,name=FlowSid"`
}

type ListExecutionStepQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListExecutionStepSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListExecutionStepRequest struct {
	ServerURL   *string
	PathParams  ListExecutionStepPathParams
	QueryParams ListExecutionStepQueryParams
	Security    ListExecutionStepSecurity
}

type ListExecutionStep200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListExecutionStep200ApplicationJSONListExecutionStepResponse struct {
	Meta  *ListExecutionStep200ApplicationJSONMeta    `json:"meta"`
	Steps []shared.StudioV1FlowExecutionExecutionStep `json:"steps"`
}

type ListExecutionStepResponse struct {
	ContentType               string
	ListExecutionStepResponse *ListExecutionStep200ApplicationJSONListExecutionStepResponse
	StatusCode                int64
}
