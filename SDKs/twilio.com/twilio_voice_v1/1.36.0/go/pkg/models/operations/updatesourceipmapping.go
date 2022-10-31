package operations

import (
"openapi/pkg/models/shared")
var UpdateSourceIPMappingServers = []string{
	"https://voice.twilio.com",
}

type UpdateSourceIPMappingPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type UpdateSourceIPMappingUpdateSourceIPMappingRequest struct {
    SipDomainSid string `form:"name=SipDomainSid"`
    
}

type UpdateSourceIPMappingSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateSourceIPMappingRequest struct {
    ServerURL *string 
    PathParams UpdateSourceIPMappingPathParams 
    Request *UpdateSourceIPMappingUpdateSourceIPMappingRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateSourceIPMappingSecurity 
    
}

type UpdateSourceIPMappingResponse struct {
    ContentType string 
    StatusCode int64 
    VoiceV1SourceIPMapping *shared.VoiceV1SourceIPMapping 
    
}

