package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSourceIPMappingServers = []string{
	"https://voice.twilio.com",
}

type CreateSourceIPMappingRequestBodyCreateSourceIPMappingRequest struct {
	IPRecordSid  string `form:"name=IpRecordSid"`
	SipDomainSid string `form:"name=SipDomainSid"`
}

type CreateSourceIPMappingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSourceIPMappingRequest struct {
	ServerURL *string
	Request   *CreateSourceIPMappingRequestBodyCreateSourceIPMappingRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateSourceIPMappingSecurity
}

type CreateSourceIPMappingResponse struct {
	ContentType            string
	StatusCode             int64
	VoiceV1SourceIPMapping *shared.VoiceV1SourceIPMapping
}
