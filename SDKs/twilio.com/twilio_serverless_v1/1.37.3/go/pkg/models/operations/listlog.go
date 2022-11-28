package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListLogServerList = []string{
	"https://serverless.twilio.com",
}

type ListLogPathParams struct {
	EnvironmentSid string `pathParam:"style=simple,explode=false,name=EnvironmentSid"`
	ServiceSid     string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListLogQueryParams struct {
	EndDate     *time.Time `queryParam:"style=form,explode=true,name=EndDate"`
	FunctionSid *string    `queryParam:"style=form,explode=true,name=FunctionSid"`
	PageSize    *int64     `queryParam:"style=form,explode=true,name=PageSize"`
	StartDate   *time.Time `queryParam:"style=form,explode=true,name=StartDate"`
}

type ListLogSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListLogListLogResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListLogListLogResponse struct {
	Logs []shared.ServerlessV1ServiceEnvironmentLog `json:"logs,omitempty"`
	Meta *ListLogListLogResponseMeta                `json:"meta,omitempty"`
}

type ListLogRequest struct {
	ServerURL   *string
	PathParams  ListLogPathParams
	QueryParams ListLogQueryParams
	Security    ListLogSecurity
}

type ListLogResponse struct {
	ContentType     string
	ListLogResponse *ListLogListLogResponse
	StatusCode      int64
}
