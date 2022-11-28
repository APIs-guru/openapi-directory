package operations

import (
	"openapi/pkg/models/shared"
)

var FetchNotificationServerList = []string{
	"https://api.twilio.com",
}

type FetchNotificationPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchNotificationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchNotificationRequest struct {
	ServerURL  *string
	PathParams FetchNotificationPathParams
	Security   FetchNotificationSecurity
}

type FetchNotificationResponse struct {
	ContentType                         string
	StatusCode                          int64
	APIV2010AccountNotificationInstance *shared.APIV2010AccountNotificationInstance
}
