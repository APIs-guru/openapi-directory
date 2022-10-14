package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListCallServers = []string{
	"https://api.twilio.com",
}

type ListCallPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListCallQueryParams struct {
	EndTime              *time.Time                 `queryParam:"style=form,explode=true,name=EndTime"`
	EndTimeLessThan      *time.Time                 `queryParam:"style=form,explode=true,name=EndTime<"`
	EndTimeGreaterThan   *time.Time                 `queryParam:"style=form,explode=true,name=EndTime>"`
	From                 *string                    `queryParam:"style=form,explode=true,name=From"`
	PageSize             *int64                     `queryParam:"style=form,explode=true,name=PageSize"`
	ParentCallSid        *string                    `queryParam:"style=form,explode=true,name=ParentCallSid"`
	StartTime            *time.Time                 `queryParam:"style=form,explode=true,name=StartTime"`
	StartTimeLessThan    *time.Time                 `queryParam:"style=form,explode=true,name=StartTime<"`
	StartTimeGreaterThan *time.Time                 `queryParam:"style=form,explode=true,name=StartTime>"`
	Status               *shared.CallEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
	To                   *string                    `queryParam:"style=form,explode=true,name=To"`
}

type ListCallSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListCallRequest struct {
	ServerURL   *string
	PathParams  ListCallPathParams
	QueryParams ListCallQueryParams
	Security    ListCallSecurity
}

type ListCall200ApplicationJSONListCallResponse struct {
	Calls           []shared.APIV2010AccountCall `json:"calls,omitempty"`
	End             *int64                       `json:"end,omitempty"`
	FirstPageURI    *string                      `json:"first_page_uri,omitempty"`
	NextPageURI     *string                      `json:"next_page_uri,omitempty"`
	Page            *int64                       `json:"page,omitempty"`
	PageSize        *int64                       `json:"page_size,omitempty"`
	PreviousPageURI *string                      `json:"previous_page_uri,omitempty"`
	Start           *int64                       `json:"start,omitempty"`
	URI             *string                      `json:"uri,omitempty"`
}

type ListCallResponse struct {
	ContentType      string
	ListCallResponse *ListCall200ApplicationJSONListCallResponse
	StatusCode       int64
}
