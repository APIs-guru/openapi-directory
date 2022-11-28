package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSyncStreamServerList = []string{
	"https://sync.twilio.com",
}

type CreateSyncStreamPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateSyncStreamCreateSyncStreamRequest struct {
	TTL        *int64  `form:"name=Ttl"`
	UniqueName *string `form:"name=UniqueName"`
}

type CreateSyncStreamSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSyncStreamRequest struct {
	ServerURL  *string
	PathParams CreateSyncStreamPathParams
	Request    *CreateSyncStreamCreateSyncStreamRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSyncStreamSecurity
}

type CreateSyncStreamResponse struct {
	ContentType             string
	StatusCode              int64
	SyncV1ServiceSyncStream *shared.SyncV1ServiceSyncStream
}
