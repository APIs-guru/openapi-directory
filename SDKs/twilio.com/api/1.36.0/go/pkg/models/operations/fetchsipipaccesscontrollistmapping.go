package operations

import (
"openapi/pkg/models/shared")
var FetchSipIPAccessControlListMappingServers = []string{
	"https://api.twilio.com",
}

type FetchSipIPAccessControlListMappingPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    DomainSid string `pathParam:"style=simple,explode=false,name=DomainSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchSipIPAccessControlListMappingSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchSipIPAccessControlListMappingRequest struct {
    ServerURL *string 
    PathParams FetchSipIPAccessControlListMappingPathParams 
    Security FetchSipIPAccessControlListMappingSecurity 
    
}

type FetchSipIPAccessControlListMappingResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountSipSipDomainSipIPAccessControlListMapping *shared.APIV2010AccountSipSipDomainSipIPAccessControlListMapping 
    
}

