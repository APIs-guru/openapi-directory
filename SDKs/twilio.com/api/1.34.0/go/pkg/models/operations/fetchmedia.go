package operations

import (
	"openapi/pkg/models/shared"
)

var FetchMediaServers = []string{
	"https://api.twilio.com",
}

type FetchMediaPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	MessageSid string `pathParam:"style=simple,explode=false,name=MessageSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchMediaSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchMediaRequest struct {
	ServerURL  *string
	PathParams FetchMediaPathParams
	Security   FetchMediaSecurity
}

type FetchMediaResponse struct {
	ContentType                 string
	StatusCode                  int64
	APIV2010AccountMessageMedia *shared.APIV2010AccountMessageMedia
}
