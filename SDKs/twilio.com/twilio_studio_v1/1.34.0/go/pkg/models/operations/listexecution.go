package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListExecutionServers = []string{
	"https://studio.twilio.com",
}

type ListExecutionPathParams struct {
	FlowSid string `pathParam:"style=simple,explode=false,name=FlowSid"`
}

type ListExecutionQueryParams struct {
	DateCreatedFrom *time.Time `queryParam:"style=form,explode=true,name=DateCreatedFrom"`
	DateCreatedTo   *time.Time `queryParam:"style=form,explode=true,name=DateCreatedTo"`
	PageSize        *int64     `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListExecutionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListExecutionRequest struct {
	ServerURL   *string
	PathParams  ListExecutionPathParams
	QueryParams ListExecutionQueryParams
	Security    ListExecutionSecurity
}

type ListExecution200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListExecution200ApplicationJSONListExecutionResponse struct {
	Executions []shared.StudioV1FlowExecution       `json:"executions"`
	Meta       *ListExecution200ApplicationJSONMeta `json:"meta"`
}

type ListExecutionResponse struct {
	ContentType           string
	ListExecutionResponse *ListExecution200ApplicationJSONListExecutionResponse
	StatusCode            int64
}
