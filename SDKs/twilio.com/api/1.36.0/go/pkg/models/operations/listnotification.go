package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListNotificationServers = []string{
	"https://api.twilio.com",
}

type ListNotificationPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListNotificationQueryParams struct {
	Log                    *int64     `queryParam:"style=form,explode=true,name=Log"`
	MessageDate            *time.Time `queryParam:"style=form,explode=true,name=MessageDate"`
	MessageDateLessThan    *time.Time `queryParam:"style=form,explode=true,name=MessageDate<"`
	MessageDateGreaterThan *time.Time `queryParam:"style=form,explode=true,name=MessageDate>"`
	PageSize               *int64     `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListNotificationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListNotificationRequest struct {
	ServerURL   *string
	PathParams  ListNotificationPathParams
	QueryParams ListNotificationQueryParams
	Security    ListNotificationSecurity
}

type ListNotification200ApplicationJSONListNotificationResponse struct {
	End             *int64                               `json:"end,omitempty"`
	FirstPageURI    *string                              `json:"first_page_uri,omitempty"`
	NextPageURI     *string                              `json:"next_page_uri,omitempty"`
	Notifications   []shared.APIV2010AccountNotification `json:"notifications,omitempty"`
	Page            *int64                               `json:"page,omitempty"`
	PageSize        *int64                               `json:"page_size,omitempty"`
	PreviousPageURI *string                              `json:"previous_page_uri,omitempty"`
	Start           *int64                               `json:"start,omitempty"`
	URI             *string                              `json:"uri,omitempty"`
}

type ListNotificationResponse struct {
	ContentType              string
	ListNotificationResponse *ListNotification200ApplicationJSONListNotificationResponse
	StatusCode               int64
}
