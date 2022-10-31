package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSourceIPMappingServers = []string{
	"https://voice.twilio.com",
}

type FetchSourceIPMappingPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchSourceIPMappingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSourceIPMappingRequest struct {
	ServerURL  *string
	PathParams FetchSourceIPMappingPathParams
	Security   FetchSourceIPMappingSecurity
}

type FetchSourceIPMappingResponse struct {
	ContentType            string
	StatusCode             int64
	VoiceV1SourceIPMapping *shared.VoiceV1SourceIPMapping
}
