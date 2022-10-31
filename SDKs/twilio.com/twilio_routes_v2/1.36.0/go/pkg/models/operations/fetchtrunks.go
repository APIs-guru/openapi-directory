package operations

import (
"openapi/pkg/models/shared")
var FetchTrunksServers = []string{
	"https://routes.twilio.com",
}

type FetchTrunksPathParams struct {
    SipTrunkDomain string `pathParam:"style=simple,explode=false,name=SipTrunkDomain"`
    
}

type FetchTrunksSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchTrunksRequest struct {
    ServerURL *string 
    PathParams FetchTrunksPathParams 
    Security FetchTrunksSecurity 
    
}

type FetchTrunksResponse struct {
    ContentType string 
    StatusCode int64 
    RoutesV2Trunks *shared.RoutesV2Trunks 
    
}

