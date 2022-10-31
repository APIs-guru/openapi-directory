package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSyncSyncMapServers = []string{
	"https://preview.twilio.com",
}

type FetchSyncSyncMapPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchSyncSyncMapSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSyncSyncMapRequest struct {
	ServerURL  *string
	PathParams FetchSyncSyncMapPathParams
	Security   FetchSyncSyncMapSecurity
}

type FetchSyncSyncMapResponse struct {
	ContentType               string
	StatusCode                int64
	PreviewSyncServiceSyncMap *shared.PreviewSyncServiceSyncMap
}
