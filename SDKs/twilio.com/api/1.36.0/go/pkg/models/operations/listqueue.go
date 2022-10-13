package operations

import (
	"openapi/pkg/models/shared"
)

var ListQueueServers = []string{
	"https://api.twilio.com",
}

type ListQueuePathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListQueueQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListQueueSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListQueueRequest struct {
	ServerURL   *string
	PathParams  ListQueuePathParams
	QueryParams ListQueueQueryParams
	Security    ListQueueSecurity
}

type ListQueue200ApplicationJSONListQueueResponse struct {
	End             *int64                        `json:"end"`
	FirstPageURI    *string                       `json:"first_page_uri"`
	NextPageURI     *string                       `json:"next_page_uri"`
	Page            *int64                        `json:"page"`
	PageSize        *int64                        `json:"page_size"`
	PreviousPageURI *string                       `json:"previous_page_uri"`
	Queues          []shared.APIV2010AccountQueue `json:"queues"`
	Start           *int64                        `json:"start"`
	URI             *string                       `json:"uri"`
}

type ListQueueResponse struct {
	ContentType       string
	ListQueueResponse *ListQueue200ApplicationJSONListQueueResponse
	StatusCode        int64
}
