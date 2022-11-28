package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSipDomainServerList = []string{
	"https://api.twilio.com",
}

type DeleteSipDomainPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteSipDomainSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSipDomainRequest struct {
	ServerURL  *string
	PathParams DeleteSipDomainPathParams
	Security   DeleteSipDomainSecurity
}

type DeleteSipDomainResponse struct {
	ContentType string
	StatusCode  int64
}
