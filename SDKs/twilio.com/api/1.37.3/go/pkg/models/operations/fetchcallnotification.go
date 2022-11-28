package operations

import (
	"openapi/pkg/models/shared"
)

var FetchCallNotificationServerList = []string{
	"https://api.twilio.com",
}

type FetchCallNotificationPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CallSid    string `pathParam:"style=simple,explode=false,name=CallSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchCallNotificationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchCallNotificationRequest struct {
	ServerURL  *string
	PathParams FetchCallNotificationPathParams
	Security   FetchCallNotificationSecurity
}

type FetchCallNotificationResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	APIV2010AccountCallCallNotificationInstance *shared.APIV2010AccountCallCallNotificationInstance
}
