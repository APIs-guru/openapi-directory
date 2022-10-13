package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListCallNotificationServers = []string{
	"https://api.twilio.com",
}

type ListCallNotificationPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CallSid    string `pathParam:"style=simple,explode=false,name=CallSid"`
}

type ListCallNotificationQueryParams struct {
	Log                    *int64     `queryParam:"style=form,explode=true,name=Log"`
	MessageDate            *time.Time `queryParam:"style=form,explode=true,name=MessageDate"`
	MessageDateLessThan    *time.Time `queryParam:"style=form,explode=true,name=MessageDate<"`
	MessageDateGreaterThan *time.Time `queryParam:"style=form,explode=true,name=MessageDate>"`
	PageSize               *int64     `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListCallNotificationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListCallNotificationRequest struct {
	ServerURL   *string
	PathParams  ListCallNotificationPathParams
	QueryParams ListCallNotificationQueryParams
	Security    ListCallNotificationSecurity
}

type ListCallNotification200ApplicationJSONListCallNotificationResponse struct {
	End             *int64                                       `json:"end"`
	FirstPageURI    *string                                      `json:"first_page_uri"`
	NextPageURI     *string                                      `json:"next_page_uri"`
	Notifications   []shared.APIV2010AccountCallCallNotification `json:"notifications"`
	Page            *int64                                       `json:"page"`
	PageSize        *int64                                       `json:"page_size"`
	PreviousPageURI *string                                      `json:"previous_page_uri"`
	Start           *int64                                       `json:"start"`
	URI             *string                                      `json:"uri"`
}

type ListCallNotificationResponse struct {
	ContentType                  string
	ListCallNotificationResponse *ListCallNotification200ApplicationJSONListCallNotificationResponse
	StatusCode                   int64
}
