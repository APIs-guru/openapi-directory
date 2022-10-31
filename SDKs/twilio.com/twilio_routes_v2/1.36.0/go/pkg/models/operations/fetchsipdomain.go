package operations

import (
"openapi/pkg/models/shared")
var FetchSipDomainServers = []string{
	"https://routes.twilio.com",
}

type FetchSipDomainPathParams struct {
    SipDomain string `pathParam:"style=simple,explode=false,name=SipDomain"`
    
}

type FetchSipDomainSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchSipDomainRequest struct {
    ServerURL *string 
    PathParams FetchSipDomainPathParams 
    Security FetchSipDomainSecurity 
    
}

type FetchSipDomainResponse struct {
    ContentType string 
    StatusCode int64 
    RoutesV2SipDomain *shared.RoutesV2SipDomain 
    
}

