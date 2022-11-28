package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteMediaServerList = []string{
	"https://api.twilio.com",
}

type DeleteMediaPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	MessageSid string `pathParam:"style=simple,explode=false,name=MessageSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteMediaSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteMediaRequest struct {
	ServerURL  *string
	PathParams DeleteMediaPathParams
	Security   DeleteMediaSecurity
}

type DeleteMediaResponse struct {
	ContentType string
	StatusCode  int64
}
