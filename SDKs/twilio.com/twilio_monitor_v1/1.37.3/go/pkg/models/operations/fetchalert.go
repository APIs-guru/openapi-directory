package operations

import (
	"openapi/pkg/models/shared"
)

var FetchAlertServerList = []string{
	"https://monitor.twilio.com",
}

type FetchAlertPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchAlertSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchAlertRequest struct {
	ServerURL  *string
	PathParams FetchAlertPathParams
	Security   FetchAlertSecurity
}

type FetchAlertResponse struct {
	ContentType            string
	StatusCode             int64
	MonitorV1AlertInstance *shared.MonitorV1AlertInstance
}
