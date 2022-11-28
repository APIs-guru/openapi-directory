package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteKeyServerList = []string{
	"https://api.twilio.com",
}

type DeleteKeyPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteKeySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteKeyRequest struct {
	ServerURL  *string
	PathParams DeleteKeyPathParams
	Security   DeleteKeySecurity
}

type DeleteKeyResponse struct {
	ContentType string
	StatusCode  int64
}
