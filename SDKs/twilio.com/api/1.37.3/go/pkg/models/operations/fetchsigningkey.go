package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSigningKeyServerList = []string{
	"https://api.twilio.com",
}

type FetchSigningKeyPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchSigningKeySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSigningKeyRequest struct {
	ServerURL  *string
	PathParams FetchSigningKeyPathParams
	Security   FetchSigningKeySecurity
}

type FetchSigningKeyResponse struct {
	ContentType               string
	StatusCode                int64
	APIV2010AccountSigningKey *shared.APIV2010AccountSigningKey
}
