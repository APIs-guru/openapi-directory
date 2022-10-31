package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSyncListServers = []string{
	"https://sync.twilio.com",
}

type CreateSyncListPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateSyncListCreateSyncListRequest struct {
	CollectionTTL *int64  `form:"name=CollectionTtl"`
	TTL           *int64  `form:"name=Ttl"`
	UniqueName    *string `form:"name=UniqueName"`
}

type CreateSyncListSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSyncListRequest struct {
	ServerURL  *string
	PathParams CreateSyncListPathParams
	Request    *CreateSyncListCreateSyncListRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSyncListSecurity
}

type CreateSyncListResponse struct {
	ContentType           string
	StatusCode            int64
	SyncV1ServiceSyncList *shared.SyncV1ServiceSyncList
}
