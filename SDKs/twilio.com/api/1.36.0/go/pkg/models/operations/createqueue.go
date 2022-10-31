package operations

import (
	"openapi/pkg/models/shared"
)

var CreateQueueServers = []string{
	"https://api.twilio.com",
}

type CreateQueuePathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type CreateQueueCreateQueueRequest struct {
	FriendlyName string `form:"name=FriendlyName"`
	MaxSize      *int64 `form:"name=MaxSize"`
}

type CreateQueueSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateQueueRequest struct {
	ServerURL  *string
	PathParams CreateQueuePathParams
	Request    *CreateQueueCreateQueueRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateQueueSecurity
}

type CreateQueueResponse struct {
	ContentType          string
	StatusCode           int64
	APIV2010AccountQueue *shared.APIV2010AccountQueue
}
