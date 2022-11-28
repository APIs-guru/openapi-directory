package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSipAuthCallsCredentialListMappingServerList = []string{
	"https://api.twilio.com",
}

type FetchSipAuthCallsCredentialListMappingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	DomainSid  string `pathParam:"style=simple,explode=false,name=DomainSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchSipAuthCallsCredentialListMappingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSipAuthCallsCredentialListMappingRequest struct {
	ServerURL  *string
	PathParams FetchSipAuthCallsCredentialListMappingPathParams
	Security   FetchSipAuthCallsCredentialListMappingSecurity
}

type FetchSipAuthCallsCredentialListMappingResponse struct {
	ContentType                                                                     string
	StatusCode                                                                      int64
	APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping *shared.APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping
}
