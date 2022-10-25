package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSipAuthRegistrationsCredentialListMappingServers = []string{
	"https://api.twilio.com",
}

type CreateSipAuthRegistrationsCredentialListMappingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	DomainSid  string `pathParam:"style=simple,explode=false,name=DomainSid"`
}

type CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest struct {
	CredentialListSid string `form:"name=CredentialListSid"`
}

type CreateSipAuthRegistrationsCredentialListMappingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSipAuthRegistrationsCredentialListMappingRequest struct {
	ServerURL  *string
	PathParams CreateSipAuthRegistrationsCredentialListMappingPathParams
	Request    *CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSipAuthRegistrationsCredentialListMappingSecurity
}

type CreateSipAuthRegistrationsCredentialListMappingResponse struct {
	ContentType                                                                                     string
	StatusCode                                                                                      int64
	APIV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping *shared.APIV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping
}
