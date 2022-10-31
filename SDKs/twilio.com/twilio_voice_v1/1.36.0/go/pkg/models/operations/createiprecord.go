package operations

import (
	"openapi/pkg/models/shared"
)

var CreateIPRecordServers = []string{
	"https://voice.twilio.com",
}

type CreateIPRecordCreateIPRecordRequest struct {
	CidrPrefixLength *int64  `form:"name=CidrPrefixLength"`
	FriendlyName     *string `form:"name=FriendlyName"`
	IPAddress        string  `form:"name=IpAddress"`
}

type CreateIPRecordSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateIPRecordRequest struct {
	ServerURL *string
	Request   *CreateIPRecordCreateIPRecordRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateIPRecordSecurity
}

type CreateIPRecordResponse struct {
	ContentType     string
	StatusCode      int64
	VoiceV1IPRecord *shared.VoiceV1IPRecord
}
