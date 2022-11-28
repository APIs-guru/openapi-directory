package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSipDomainServerList = []string{
	"https://api.twilio.com",
}

type FetchSipDomainPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchSipDomainSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSipDomainRequest struct {
	ServerURL  *string
	PathParams FetchSipDomainPathParams
	Security   FetchSipDomainSecurity
}

type FetchSipDomainResponse struct {
	ContentType                 string
	StatusCode                  int64
	APIV2010AccountSipSipDomain *shared.APIV2010AccountSipSipDomain
}
