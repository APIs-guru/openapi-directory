package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListMessageServerList = []string{
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

type ListMessageListMessageResponse struct {
	End             *int64                          `json:"end,omitempty"`
	FirstPageURI    *string                         `json:"first_page_uri,omitempty"`
	Messages        []shared.APIV2010AccountMessage `json:"messages,omitempty"`
	NextPageURI     *string                         `json:"next_page_uri,omitempty"`
	Page            *int64                          `json:"page,omitempty"`
	PageSize        *int64                          `json:"page_size,omitempty"`
	PreviousPageURI *string                         `json:"previous_page_uri,omitempty"`
	Start           *int64                          `json:"start,omitempty"`
	URI             *string                         `json:"uri,omitempty"`
}

type ListMessageRequest struct {
	ServerURL   *string
	PathParams  ListMessagePathParams
	QueryParams ListMessageQueryParams
	Security    ListMessageSecurity
}

type ListMessageResponse struct {
	ContentType         string
	ListMessageResponse *ListMessageListMessageResponse
	StatusCode          int64
}
