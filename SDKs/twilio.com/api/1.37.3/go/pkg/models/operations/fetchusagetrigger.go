package operations

import (
	"openapi/pkg/models/shared"
)

var FetchUsageTriggerServerList = []string{
	"https://api.twilio.com",
}

type FetchUsageTriggerPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchUsageTriggerSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchUsageTriggerRequest struct {
	ServerURL  *string
	PathParams FetchUsageTriggerPathParams
	Security   FetchUsageTriggerSecurity
}

type FetchUsageTriggerResponse struct {
	ContentType                      string
	StatusCode                       int64
	APIV2010AccountUsageUsageTrigger *shared.APIV2010AccountUsageUsageTrigger
}
