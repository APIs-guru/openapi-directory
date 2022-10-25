package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSipCredentialListMappingServers = []string{
	"https://api.twilio.com",
}

type CreateSipCredentialListMappingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	DomainSid  string `pathParam:"style=simple,explode=false,name=DomainSid"`
}

type CreateSipCredentialListMappingCreateSipCredentialListMappingRequest struct {
	CredentialListSid string `form:"name=CredentialListSid"`
}

type CreateSipCredentialListMappingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSipCredentialListMappingRequest struct {
	ServerURL  *string
	PathParams CreateSipCredentialListMappingPathParams
	Request    *CreateSipCredentialListMappingCreateSipCredentialListMappingRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSipCredentialListMappingSecurity
}

type CreateSipCredentialListMappingResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	APIV2010AccountSipSipDomainSipCredentialListMapping *shared.APIV2010AccountSipSipDomainSipCredentialListMapping
}
