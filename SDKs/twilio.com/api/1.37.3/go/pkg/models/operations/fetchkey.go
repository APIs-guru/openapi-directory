package operations

import (
	"openapi/pkg/models/shared"
)

var FetchKeyServerList = []string{
	"https://api.twilio.com",
}

type FetchKeyPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchKeySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchKeyRequest struct {
	ServerURL  *string
	PathParams FetchKeyPathParams
	Security   FetchKeySecurity
}

type FetchKeyResponse struct {
	ContentType        string
	StatusCode         int64
	APIV2010AccountKey *shared.APIV2010AccountKey
}
