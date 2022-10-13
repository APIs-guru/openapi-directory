package operations

import (
	"openapi/pkg/models/shared"
)

var FetchEntityServers = []string{
	"https://verify.twilio.com",
}

type FetchEntityPathParams struct {
	Identity   string `pathParam:"style=simple,explode=false,name=Identity"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type FetchEntitySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchEntityRequest struct {
	ServerURL  *string
	PathParams FetchEntityPathParams
	Security   FetchEntitySecurity
}

type FetchEntityResponse struct {
	ContentType           string
	StatusCode            int64
	VerifyV2ServiceEntity *shared.VerifyV2ServiceEntity
}
