package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListLogServers = []string{
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

type ListLogRequest struct {
	ServerURL   *string
	PathParams  ListLogPathParams
	QueryParams ListLogQueryParams
	Security    ListLogSecurity
}

type ListLog200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListLog200ApplicationJSONListLogResponse struct {
	Logs []shared.ServerlessV1ServiceEnvironmentLog `json:"logs"`
	Meta *ListLog200ApplicationJSONMeta             `json:"meta"`
}

type ListLogResponse struct {
	ContentType     string
	ListLogResponse *ListLog200ApplicationJSONListLogResponse
	StatusCode      int64
}
