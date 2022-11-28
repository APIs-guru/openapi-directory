package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSipAuthRegistrationsCredentialListMappingServerList = []string{
	"https://api.twilio.com",
}

type DeleteSipAuthRegistrationsCredentialListMappingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	DomainSid  string `pathParam:"style=simple,explode=false,name=DomainSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteSipAuthRegistrationsCredentialListMappingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSipAuthRegistrationsCredentialListMappingRequest struct {
	ServerURL  *string
	PathParams DeleteSipAuthRegistrationsCredentialListMappingPathParams
	Security   DeleteSipAuthRegistrationsCredentialListMappingSecurity
}

type DeleteSipAuthRegistrationsCredentialListMappingResponse struct {
	ContentType string
	StatusCode  int64
}
