package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSyncMapServerList = []string{
	"https://sync.twilio.com",
}

type UpdateSyncMapPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateSyncMapUpdateSyncMapRequest struct {
	CollectionTTL *int64 `form:"name=CollectionTtl"`
	TTL           *int64 `form:"name=Ttl"`
}

type UpdateSyncMapSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSyncMapRequest struct {
	ServerURL  *string
	PathParams UpdateSyncMapPathParams
	Request    *UpdateSyncMapUpdateSyncMapRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSyncMapSecurity
}

type UpdateSyncMapResponse struct {
	ContentType          string
	StatusCode           int64
	SyncV1ServiceSyncMap *shared.SyncV1ServiceSyncMap
}
