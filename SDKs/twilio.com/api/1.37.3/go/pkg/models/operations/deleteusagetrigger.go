package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteUsageTriggerServerList = []string{
	"https://api.twilio.com",
}

type DeleteUsageTriggerPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteUsageTriggerSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteUsageTriggerRequest struct {
	ServerURL  *string
	PathParams DeleteUsageTriggerPathParams
	Security   DeleteUsageTriggerSecurity
}

type DeleteUsageTriggerResponse struct {
	ContentType string
	StatusCode  int64
}
