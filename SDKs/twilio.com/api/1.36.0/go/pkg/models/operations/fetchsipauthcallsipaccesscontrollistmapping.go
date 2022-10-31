package operations

import (
"openapi/pkg/models/shared")
var FetchSipAuthCallsIPAccessControlListMappingServers = []string{
	"https://api.twilio.com",
}

type FetchSipAuthCallsIPAccessControlListMappingPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    DomainSid string `pathParam:"style=simple,explode=false,name=DomainSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchSipAuthCallsIPAccessControlListMappingSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchSipAuthCallsIPAccessControlListMappingRequest struct {
    ServerURL *string 
    PathParams FetchSipAuthCallsIPAccessControlListMappingPathParams 
    Security FetchSipAuthCallsIPAccessControlListMappingSecurity 
    
}

type FetchSipAuthCallsIPAccessControlListMappingResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIPAccessControlListMapping *shared.APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIPAccessControlListMapping 
    
}

