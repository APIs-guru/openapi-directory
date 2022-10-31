package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSourceIPMappingServers = []string{
	"https://voice.twilio.com",
}

type DeleteSourceIPMappingPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteSourceIPMappingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSourceIPMappingRequest struct {
	ServerURL  *string
	PathParams DeleteSourceIPMappingPathParams
	Security   DeleteSourceIPMappingSecurity
}

type DeleteSourceIPMappingResponse struct {
	ContentType string
	StatusCode  int64
}
