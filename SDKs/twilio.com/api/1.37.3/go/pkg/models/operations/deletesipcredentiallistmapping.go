package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSipCredentialListMappingServerList = []string{
	"https://api.twilio.com",
}

type DeleteSipCredentialListMappingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	DomainSid  string `pathParam:"style=simple,explode=false,name=DomainSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteSipCredentialListMappingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSipCredentialListMappingRequest struct {
	ServerURL  *string
	PathParams DeleteSipCredentialListMappingPathParams
	Security   DeleteSipCredentialListMappingSecurity
}

type DeleteSipCredentialListMappingResponse struct {
	ContentType string
	StatusCode  int64
}
