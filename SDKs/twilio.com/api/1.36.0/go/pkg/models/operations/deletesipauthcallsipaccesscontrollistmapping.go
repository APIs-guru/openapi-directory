package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSipAuthCallsIPAccessControlListMappingServers = []string{
	"https://api.twilio.com",
}

type DeleteSipAuthCallsIPAccessControlListMappingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	DomainSid  string `pathParam:"style=simple,explode=false,name=DomainSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteSipAuthCallsIPAccessControlListMappingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSipAuthCallsIPAccessControlListMappingRequest struct {
	ServerURL  *string
	PathParams DeleteSipAuthCallsIPAccessControlListMappingPathParams
	Security   DeleteSipAuthCallsIPAccessControlListMappingSecurity
}

type DeleteSipAuthCallsIPAccessControlListMappingResponse struct {
	ContentType string
	StatusCode  int64
}
