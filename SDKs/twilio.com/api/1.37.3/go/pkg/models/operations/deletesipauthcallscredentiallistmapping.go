package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSipAuthCallsCredentialListMappingServerList = []string{
	"https://api.twilio.com",
}

type DeleteSipAuthCallsCredentialListMappingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	DomainSid  string `pathParam:"style=simple,explode=false,name=DomainSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteSipAuthCallsCredentialListMappingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSipAuthCallsCredentialListMappingRequest struct {
	ServerURL  *string
	PathParams DeleteSipAuthCallsCredentialListMappingPathParams
	Security   DeleteSipAuthCallsCredentialListMappingSecurity
}

type DeleteSipAuthCallsCredentialListMappingResponse struct {
	ContentType string
	StatusCode  int64
}
