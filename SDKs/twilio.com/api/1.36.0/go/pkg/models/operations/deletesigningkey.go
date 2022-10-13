package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSigningKeyServers = []string{
	"https://api.twilio.com",
}

type DeleteSigningKeyPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteSigningKeySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSigningKeyRequest struct {
	ServerURL  *string
	PathParams DeleteSigningKeyPathParams
	Security   DeleteSigningKeySecurity
}

type DeleteSigningKeyResponse struct {
	ContentType string
	StatusCode  int64
}
