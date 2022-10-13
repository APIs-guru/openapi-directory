package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListAlertServers = []string{
	"https://monitor.twilio.com",
}

type ListAlertQueryParams struct {
	EndDate   *time.Time `queryParam:"style=form,explode=true,name=EndDate"`
	LogLevel  *string    `queryParam:"style=form,explode=true,name=LogLevel"`
	PageSize  *int64     `queryParam:"style=form,explode=true,name=PageSize"`
	StartDate *time.Time `queryParam:"style=form,explode=true,name=StartDate"`
}

type ListAlertSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListAlertRequest struct {
	ServerURL   *string
	QueryParams ListAlertQueryParams
	Security    ListAlertSecurity
}

type ListAlert200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListAlert200ApplicationJSONListAlertResponse struct {
	Alerts []shared.MonitorV1Alert          `json:"alerts"`
	Meta   *ListAlert200ApplicationJSONMeta `json:"meta"`
}

type ListAlertResponse struct {
	ContentType       string
	ListAlertResponse *ListAlert200ApplicationJSONListAlertResponse
	StatusCode        int64
}
