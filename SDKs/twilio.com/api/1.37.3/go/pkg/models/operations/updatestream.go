package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateStreamServerList = []string{
	"https://api.twilio.com",
}

type UpdateStreamPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CallSid    string `pathParam:"style=simple,explode=false,name=CallSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateStreamUpdateStreamRequest struct {
	Status shared.StreamEnumUpdateStatusEnum `form:"name=Status"`
}

type UpdateStreamSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateStreamRequest struct {
	ServerURL  *string
	PathParams UpdateStreamPathParams
	Request    *UpdateStreamUpdateStreamRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateStreamSecurity
}

type UpdateStreamResponse struct {
	ContentType               string
	StatusCode                int64
	APIV2010AccountCallStream *shared.APIV2010AccountCallStream
}
