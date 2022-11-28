package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSyncSyncMapServerList = []string{
	"https://preview.twilio.com",
}

type DeleteSyncSyncMapPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteSyncSyncMapSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSyncSyncMapRequest struct {
	ServerURL  *string
	PathParams DeleteSyncSyncMapPathParams
	Security   DeleteSyncSyncMapSecurity
}

type DeleteSyncSyncMapResponse struct {
	ContentType string
	StatusCode  int64
}
