package operations

import (
	"openapi/pkg/models/shared"
)

var FetchUserBindingServers = []string{
	"https://ip-messaging.twilio.com",
}

type FetchUserBindingPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
	UserSid    string `pathParam:"style=simple,explode=false,name=UserSid"`
}

type FetchUserBindingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchUserBindingRequest struct {
	ServerURL  *string
	PathParams FetchUserBindingPathParams
	Security   FetchUserBindingSecurity
}

type FetchUserBindingResponse struct {
	ContentType                         string
	StatusCode                          int64
	IPMessagingV2ServiceUserUserBinding *shared.IPMessagingV2ServiceUserUserBinding
}
