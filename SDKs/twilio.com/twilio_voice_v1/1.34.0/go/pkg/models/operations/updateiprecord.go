package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateIPRecordServers = []string{
	"https://voice.twilio.com",
}

type UpdateIPRecordPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateIPRecordRequestBodyUpdateIPRecordRequest struct {
	FriendlyName *string `form:"name=FriendlyName"`
}

type UpdateIPRecordSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateIPRecordRequest struct {
	ServerURL  *string
	PathParams UpdateIPRecordPathParams
	Request    *UpdateIPRecordRequestBodyUpdateIPRecordRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateIPRecordSecurity
}

type UpdateIPRecordResponse struct {
	ContentType     string
	StatusCode      int64
	VoiceV1IPRecord *shared.VoiceV1IPRecord
}
