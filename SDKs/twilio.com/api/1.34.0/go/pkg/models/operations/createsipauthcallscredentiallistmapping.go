package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSipAuthCallsCredentialListMappingServers = []string{
	"https://api.twilio.com",
}

type CreateSipAuthCallsCredentialListMappingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	DomainSid  string `pathParam:"style=simple,explode=false,name=DomainSid"`
}

type CreateSipAuthCallsCredentialListMappingRequestBodyCreateSipAuthCallsCredentialListMappingRequest struct {
	CredentialListSid string `form:"name=CredentialListSid"`
}

type CreateSipAuthCallsCredentialListMappingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSipAuthCallsCredentialListMappingRequest struct {
	ServerURL  *string
	PathParams CreateSipAuthCallsCredentialListMappingPathParams
	Request    *CreateSipAuthCallsCredentialListMappingRequestBodyCreateSipAuthCallsCredentialListMappingRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSipAuthCallsCredentialListMappingSecurity
}

type CreateSipAuthCallsCredentialListMappingResponse struct {
	ContentType                                                                     string
	StatusCode                                                                      int64
	APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping *shared.APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping
}
