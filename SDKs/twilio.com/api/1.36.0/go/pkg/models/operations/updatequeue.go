package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateQueueServers = []string{
	"https://api.twilio.com",
}

type UpdateQueuePathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateQueueUpdateQueueRequest struct {
	FriendlyName *string `form:"name=FriendlyName"`
	MaxSize      *int64  `form:"name=MaxSize"`
}

type UpdateQueueSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateQueueRequest struct {
	ServerURL  *string
	PathParams UpdateQueuePathParams
	Request    *UpdateQueueUpdateQueueRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateQueueSecurity
}

type UpdateQueueResponse struct {
	ContentType          string
	StatusCode           int64
	APIV2010AccountQueue *shared.APIV2010AccountQueue
}
