package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSipCredentialListMappingServerList = []string{
	"https://api.twilio.com",
}

type FetchSipCredentialListMappingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	DomainSid  string `pathParam:"style=simple,explode=false,name=DomainSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchSipCredentialListMappingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSipCredentialListMappingRequest struct {
	ServerURL  *string
	PathParams FetchSipCredentialListMappingPathParams
	Security   FetchSipCredentialListMappingSecurity
}

type FetchSipCredentialListMappingResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	APIV2010AccountSipSipDomainSipCredentialListMapping *shared.APIV2010AccountSipSipDomainSipCredentialListMapping
}
