package operations

import (
	"openapi/pkg/models/shared"
)

var ListCallEventServers = []string{
	"https://api.twilio.com",
}

type ListCallEventPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CallSid    string `pathParam:"style=simple,explode=false,name=CallSid"`
}

type ListCallEventQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListCallEventSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListCallEventRequest struct {
	ServerURL   *string
	PathParams  ListCallEventPathParams
	QueryParams ListCallEventQueryParams
	Security    ListCallEventSecurity
}

type ListCallEvent200ApplicationJSONListCallEventResponse struct {
	End             *int64                                `json:"end"`
	Events          []shared.APIV2010AccountCallCallEvent `json:"events"`
	FirstPageURI    *string                               `json:"first_page_uri"`
	NextPageURI     *string                               `json:"next_page_uri"`
	Page            *int64                                `json:"page"`
	PageSize        *int64                                `json:"page_size"`
	PreviousPageURI *string                               `json:"previous_page_uri"`
	Start           *int64                                `json:"start"`
	URI             *string                               `json:"uri"`
}

type ListCallEventResponse struct {
	ContentType           string
	ListCallEventResponse *ListCallEvent200ApplicationJSONListCallEventResponse
	StatusCode            int64
}
