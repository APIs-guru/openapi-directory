package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSyncMapServers = []string{
	"https://sync.twilio.com",
}

type CreateSyncMapPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateSyncMapRequestBodyCreateSyncMapRequest struct {
	CollectionTTL *int64  `form:"name=CollectionTtl"`
	TTL           *int64  `form:"name=Ttl"`
	UniqueName    *string `form:"name=UniqueName"`
}

type CreateSyncMapSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSyncMapRequest struct {
	ServerURL  *string
	PathParams CreateSyncMapPathParams
	Request    *CreateSyncMapRequestBodyCreateSyncMapRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSyncMapSecurity
}

type CreateSyncMapResponse struct {
	ContentType          string
	StatusCode           int64
	SyncV1ServiceSyncMap *shared.SyncV1ServiceSyncMap
}
