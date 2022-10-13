package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSyncSyncMapServers = []string{
	"https://preview.twilio.com",
}

type CreateSyncSyncMapPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateSyncSyncMapRequestBodyCreateSyncSyncMapRequest struct {
	UniqueName *string `form:"name=UniqueName"`
}

type CreateSyncSyncMapSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSyncSyncMapRequest struct {
	ServerURL  *string
	PathParams CreateSyncSyncMapPathParams
	Request    *CreateSyncSyncMapRequestBodyCreateSyncSyncMapRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSyncSyncMapSecurity
}

type CreateSyncSyncMapResponse struct {
	ContentType               string
	StatusCode                int64
	PreviewSyncServiceSyncMap *shared.PreviewSyncServiceSyncMap
}
