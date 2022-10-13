package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListMessageServers = []string{
	"https://api.twilio.com",
}

type ListMessagePathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListMessageQueryParams struct {
	DateSent            *time.Time `queryParam:"style=form,explode=true,name=DateSent"`
	DateSentLessThan    *time.Time `queryParam:"style=form,explode=true,name=DateSent<"`
	DateSentGreaterThan *time.Time `queryParam:"style=form,explode=true,name=DateSent>"`
	From                *string    `queryParam:"style=form,explode=true,name=From"`
	PageSize            *int64     `queryParam:"style=form,explode=true,name=PageSize"`
	To                  *string    `queryParam:"style=form,explode=true,name=To"`
}

type ListMessageSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListMessageRequest struct {
	ServerURL   *string
	PathParams  ListMessagePathParams
	QueryParams ListMessageQueryParams
	Security    ListMessageSecurity
}

type ListMessage200ApplicationJSONListMessageResponse struct {
	End             *int64                          `json:"end"`
	FirstPageURI    *string                         `json:"first_page_uri"`
	Messages        []shared.APIV2010AccountMessage `json:"messages"`
	NextPageURI     *string                         `json:"next_page_uri"`
	Page            *int64                          `json:"page"`
	PageSize        *int64                          `json:"page_size"`
	PreviousPageURI *string                         `json:"previous_page_uri"`
	Start           *int64                          `json:"start"`
	URI             *string                         `json:"uri"`
}

type ListMessageResponse struct {
	ContentType         string
	ListMessageResponse *ListMessage200ApplicationJSONListMessageResponse
	StatusCode          int64
}
