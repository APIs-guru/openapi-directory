package operations

import (
"openapi/pkg/models/shared")
var CreateSourceIPMappingServers = []string{
	"https://voice.twilio.com",
}

type CreateSourceIPMappingCreateSourceIPMappingRequest struct {
    IPRecordSid string `form:"name=IpRecordSid"`
    SipDomainSid string `form:"name=SipDomainSid"`
    
}

type CreateSourceIPMappingSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateSourceIPMappingRequest struct {
    ServerURL *string 
    Request *CreateSourceIPMappingCreateSourceIPMappingRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateSourceIPMappingSecurity 
    
}

type CreateSourceIPMappingResponse struct {
    ContentType string 
    StatusCode int64 
    VoiceV1SourceIPMapping *shared.VoiceV1SourceIPMapping 
    
}

