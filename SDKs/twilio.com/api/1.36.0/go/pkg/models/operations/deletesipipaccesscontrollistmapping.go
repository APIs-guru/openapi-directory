package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSipIPAccessControlListMappingServers = []string{
	"https://api.twilio.com",
}

type DeleteSipIPAccessControlListMappingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	DomainSid  string `pathParam:"style=simple,explode=false,name=DomainSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteSipIPAccessControlListMappingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSipIPAccessControlListMappingRequest struct {
	ServerURL  *string
	PathParams DeleteSipIPAccessControlListMappingPathParams
	Security   DeleteSipIPAccessControlListMappingSecurity
}

type DeleteSipIPAccessControlListMappingResponse struct {
	ContentType string
	StatusCode  int64
}
