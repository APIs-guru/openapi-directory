package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSyncListServers = []string{
	"https://sync.twilio.com",
}

type UpdateSyncListPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateSyncListRequestBodyUpdateSyncListRequest struct {
	CollectionTTL *int64 `form:"name=CollectionTtl"`
	TTL           *int64 `form:"name=Ttl"`
}

type UpdateSyncListSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSyncListRequest struct {
	ServerURL  *string
	PathParams UpdateSyncListPathParams
	Request    *UpdateSyncListRequestBodyUpdateSyncListRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSyncListSecurity
}

type UpdateSyncListResponse struct {
	ContentType           string
	StatusCode            int64
	SyncV1ServiceSyncList *shared.SyncV1ServiceSyncList
}
