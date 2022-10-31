package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSipAuthRegistrationsCredentialListMappingServers = []string{
	"https://api.twilio.com",
}

type FetchSipAuthRegistrationsCredentialListMappingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	DomainSid  string `pathParam:"style=simple,explode=false,name=DomainSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchSipAuthRegistrationsCredentialListMappingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSipAuthRegistrationsCredentialListMappingRequest struct {
	ServerURL  *string
	PathParams FetchSipAuthRegistrationsCredentialListMappingPathParams
	Security   FetchSipAuthRegistrationsCredentialListMappingSecurity
}

type FetchSipAuthRegistrationsCredentialListMappingResponse struct {
	ContentType                                                                                     string
	StatusCode                                                                                      int64
	APIV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping *shared.APIV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping
}
