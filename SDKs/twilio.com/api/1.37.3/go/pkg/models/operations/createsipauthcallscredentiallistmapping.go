package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSipAuthCallsCredentialListMappingServerList = []string{
	"https://api.twilio.com",
}

type CreateSipAuthCallsCredentialListMappingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	DomainSid  string `pathParam:"style=simple,explode=false,name=DomainSid"`
}

type CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest struct {
	CredentialListSid string `form:"name=CredentialListSid"`
}

type CreateSipAuthCallsCredentialListMappingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSipAuthCallsCredentialListMappingRequest struct {
	ServerURL  *string
	PathParams CreateSipAuthCallsCredentialListMappingPathParams
	Request    *CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSipAuthCallsCredentialListMappingSecurity
}

type CreateSipAuthCallsCredentialListMappingResponse struct {
	ContentType                                                                     string
	StatusCode                                                                      int64
	APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping *shared.APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping
}
